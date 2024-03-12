import React from "react";
import { Task } from "@/types";
import { format, isPast } from "date-fns";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task: { title, priority, deadline },
}) => {
  // Check if deadline is already a Date object or if it's a string that needs parsing
  const deadlineDate = deadline 
    ? deadline instanceof Date
      ? deadline
    : new Date(deadline as string)
    : null;
  const deadlineFormatted = deadlineDate
    ? format(deadlineDate, "MMM d, yyyy")
    : "No deadline";
  const isDeadlinePast = deadlineDate ? isPast(deadlineDate) : false;

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        isDeadlinePast ? "bg-red-100" : "bg-white"
      }`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <dl>
        <dt className="font-medium">Priority:</dt>
        <dd>{priority}</dd>
        <dt className="font-medium">Deadline:</dt>
        <dd className={`${isDeadlinePast ? "text-red-600" : "text-gray-800"}`}>
          {deadlineFormatted}
        </dd>
      </dl>
    </div>
  );
};

export default TaskCard;
