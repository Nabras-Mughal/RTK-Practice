import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todo";

function AddItem() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(item));
    setItem("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button>Add todo</button>
    </form>
  );
}
export default AddItem;
