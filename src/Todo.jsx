import { useDispatch, useSelector } from "react-redux";

function ToDo() {
  const select = useSelector((state) => state.todo);
  console.log(select);
  return (
    <div>
      TO DO APP
      <ul>
        {select.map((item, index) => (
          <li key={index}>{item.payload}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
