import AddToDo from "@/components/AddToDo";
import RemoveTodo from "@/components/RemoveTodo";


const ToDoPage = () => {

  return (
    <div className="container mx-auto p-4">
      <AddToDo />
      <RemoveTodo />
    </div>
  );
};

export default ToDoPage;