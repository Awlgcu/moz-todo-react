import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App(props) {
  //将传入的任务参数定义为变量，再将变量转换成任务对应的Todo组件
  const [tasks, setTasks] = useState(props.tasks);
  function toggleTaskCompleted(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }
  //创建一个删除任务的函数，与添加任务函数相同的处理
  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  }
  //创建一个编辑任务的函数
  function editTask(id, newName) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  const taskList = tasks.map((task) => {
    return (
      <Todo
        taskName={task.name}
        id={task.id}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
  });

  //创建一个添加任务的函数，并将其作为属性传递给Form组件，这样Form组件在提交时就能调用这个函数修改App组件中的tasks变量从而增加一个<Todo>组件
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskNoun = taskList.length == 1 ? "task" : "tasks";
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onSubmit={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
