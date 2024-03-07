import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { FIRESTORE } from '@/firebaseConfig';
import { Comment } from '@/types';

const useComments = (taskId: string) => {
    const [comments, setComments] = useState<Comment[]>([]); // Define Comment type as needed

    useEffect(() => {
        const commentsRef = collection(FIRESTORE, 'comments');
        const q = query(commentsRef, where('taskId', '==', taskId));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData: Comment[] = [];
            snapshot.forEach((doc) => {
                const comment: Comment = { id: doc.id, ...doc.data() } as Comment;
                commentsData.push(comment);
            });
            setComments(commentsData);
        });

        return () => unsubscribe();
    }, [taskId]);
  
    return comments;
  };
  
export default useComments;