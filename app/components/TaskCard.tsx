import React from 'react';
import { Task } from '@/types';
import { format, isPast } from 'date-fns';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  // Format the deadline date or show "No deadline" if not set
  const deadlineFormatted = task.deadline ? format(task.deadline.toDate(), 'PPP') : 'No deadline';
  const isDeadlinePast = task.deadline ? isPast(task.deadline.toDate()) : false;

  return (
    <div className={`p-4 rounded-lg shadow-md ${isDeadlinePast ? 'bg-red-100' : 'bg-white'}`}>
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Deadline: <span className={`${isDeadlinePast ? 'text-red-600' : 'text-gray-800'}`}>{deadlineFormatted}</span></p>
    </div>
  );
};

export default TaskCard;