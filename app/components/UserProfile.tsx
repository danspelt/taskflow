import { useAuth } from '@/context/AuthContext';

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <div>Welcome, {currentUser.email}</div>
      ) : (
        <div>You are not logged in.</div>
      )}
    </div>
  );
};

export default UserProfile;
