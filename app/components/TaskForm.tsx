import { useState, useEffect } from 'react';
import { FIRESTORE } from '@/firebaseConfig'; // Ensure correct path
import { doc, updateDoc } from 'firebase/firestore';
import Modal from './Modal'; // Assume you have a Modal component for confirmation
import { Task, TaskFormProps } from '@/types';
import { Timestamp } from 'firebase/firestore';

const TaskForm: React.FC<TaskFormProps> = ({ existingTask }) => {
  const [title, setTitle] = useState<string>(existingTask ? existingTask.title : '');
  const [priority, setPriority] = useState<string>(existingTask ? existingTask.priority : 'Medium');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<string>('');

  useEffect(() => {
    // Safely convert Timestamp to string if it exists and is a valid Timestamp
    if (existingTask && existingTask.deadline && existingTask.deadline instanceof Timestamp) {
      const deadlineDate = new Date(existingTask.deadline.toMillis()).toISOString().split('T')[0];      setDeadline(deadlineDate);
    } else {
      setDeadline('');
    }
  }, [existingTask]);


  const handleSaveTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSaveTask = async () => {
    const taskDocRef = doc(FIRESTORE, 'tasks', existingTask.id); // For updating an existing task
    await updateDoc(taskDocRef, {
      title,
      priority,
    });
    // Optionally, redirect or notify the user of the successful update
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleSaveTask} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Task Title</label>
          <input
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            id="priority"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
        <input
          type="date"
          className="input input-bordered w-full max-w-xs"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Task
        </button>
      </form>
      {showModal && (
        <Modal
          title="Confirm Task Update"
          content="Are you sure you want to save these changes?"
          confirmLabel="Save Changes"
          onCancel={() => setShowModal(false)}
          onConfirm={confirmSaveTask}
        />
      )}
    </>
  );
};

export default TaskForm;