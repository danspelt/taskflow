import AddToDo from "@/components/AddToDo";
import TodoList from "@/components/TodoList";

const ToDoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col w-full max-w-md p-4 bg-white rounded-lg shadow space-y-4">
          <AddToDo />
          <TodoList />
        </div>
    </div>
  );
};

export default ToDoPage;