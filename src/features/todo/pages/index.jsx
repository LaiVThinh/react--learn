import React, { useState } from "react";
import TodoForm from "../components/todoForm";
import TodoList from "../components/TodoList";

Todofeatures.propTypes = {};
function Todofeatures(props) {
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

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    // const newTodoList = [...todoList];
    // const newTodo = {
    //   ...newTodoList[idx],
    //   status: (newTodo[idx].status = "new" ? "completed" : "new"),
    // };
    // setTodoList(newTodoList);
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
    console.log("Form Sumit", values);
  };

  return (
    <div>
      <h3>Todo form</h3>
      <TodoForm onsubmit={handleTodoFormSumit} />
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
