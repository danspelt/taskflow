"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, addDoc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore document functions
import { FIREBASE_AUTH, FIRESTORE } from "@/firebaseConfig"; // Import Firebase auth and Firestore instances

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        // Check if user already exists in Firestore
        const userRef = doc(FIRESTORE, "users", user.uid);
        const docSnap = await getDoc(userRef);
  
        if (!docSnap.exists()) {
          // Add user to Firestore if not exists
          await setDoc(userRef, {
            email: user.email,
            provider: user.providerData[0]?.providerId,
            isAdmin: false,
            createdAt: new Date(),
          });
        }
  
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  
    return unsubscribe;
  }, []);
  const handleError = (fn) => async (...args) => {
    try {
      setError(""); // Reset error before attempting
      const result = await fn(...args);
      return result;
    } catch (error) {
      setError(error.message);
      throw error; // Re-throw the error for further handling if needed
    }
  };

  const signup = handleError(async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    const user = userCredential.user;
    // After successful sign-up, add user to Firestore
    const userRef = doc(FIRESTORE, "users", user.uid);
    await addDoc(userRef, {
      email: user.email,
      provider: user.providerData[0].providerId,
      taskListId: 0,
      createdAt: new Date(),
    });
    return user;
  });

  const login = handleError((email, password) =>
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
  );

  const logout = () => {
    setError("");
    return signOut(FIREBASE_AUTH);
  };

  const loginWithGoogle = handleError(() => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, provider);
  });

  const value = useMemo(
    () => ({
      currentUser,
      signup,
      login,
      logout,
      loginWithGoogle,
      error,
    }),
    [currentUser, error]
  );

  return (
    <AuthContext.Provider value={value}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};
