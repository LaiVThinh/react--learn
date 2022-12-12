import React, { useState } from "react";
import TodoForm from "../components/todoForm";
import TodoList from "../components/TodoList";

Todofeatures.propTypes = {};

const initTodoList = [
  {
    id: 1,
    title: "eat",
    status: "new",
  },
  {
    id: 2,
    title: "sleep",
    status: "new",
  },
  {
    id: 3,
    title: "code",
    status: "completed",
  },
];

function Todofeatures(props) {
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState("all");

  const handleTodoClick = (id) => {
    const newTodoList = [...todoList];

    // find item by id
    const index = newTodoList.findIndex((item) => item.id === id);

    if (index < 0) {
      // bao loi ko tim thay
    }

    newTodoList[index].status =
      newTodoList[index].status === "new" ? "completed" : "new";

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setfilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setfilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setfilteredStatus("new");
  };

  const renderedTodolist = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  // console.log(renderedTodolist);
  const handleTodoFormSumit = (values) => {
    console.log("Form Submit", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo form</h3>
      <TodoForm onSubmit={handleTodoFormSumit} />
      <h3>Todo List </h3>
      <TodoList todoList={renderedTodolist} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
    </div>
  );
}
export default Todofeatures;
