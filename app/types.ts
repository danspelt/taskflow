import { Timestamp } from "firebase/firestore";
interface Task {
  id: string;
  title: string;
  text: string;
  priority: string;
  deadline: Timestamp | string; // Use Timestamp for Firestore compatibility or string for simplicity
}

interface TaskFormProps {
  existingTask: Task;
}
interface Comment {
    id: string;
  comment: string;
  taskId: string;
}
export type { Task, TaskFormProps, Comment };
