import { useState } from "react";

export default function Form(props) {
  //1.name是一个变量，变量值为“learn react”，setName是一个函数，其功能仅为修改name的值
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //3.在提交表单时使用父元素传来的onSubmit方法将这个名字的task创建出来并渲染
    //3.1空串不提交
    if (name.length === 0) return;
    props.onSubmit(name);
    //4.在变量提交后将其恢复成默认值
    setName("");
  }

  function handleChange(event) {
    //2.当在输入框敲击键盘时把输入的值存在name变量中
    setName(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
