import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

export default function App(props) {
  const taskList = props.data.map((task) => (
    <Todo
      taskName={task.name}
      id={task.id}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <FilterButton />
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
