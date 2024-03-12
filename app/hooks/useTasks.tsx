import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot,  } from 'firebase/firestore';
import { FIRESTORE } from '@/firebaseConfig';
import { Task } from '@/types';


const useTasks = (projectId: string) => {
const [tasks, setTasks] = useState<Task[]>([]);

useEffect(() => {
    const q = query(collection(FIRESTORE, 'tasks'), where('projectId', '==', projectId));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData: Task[] = [];
        querySnapshot.forEach((doc) => {
            const task: Task = { 
                id: doc.id,
                title: doc.data().title,
                text: doc.data().text,
                priority: doc.data().priority,
                deadline: doc.data().deadline,
            };
            tasksData.push(task);
        });
        setTasks(tasksData);
    });

    return () => unsubscribe();
}, [projectId]);

  return tasks;
};
 
export default useTasks;