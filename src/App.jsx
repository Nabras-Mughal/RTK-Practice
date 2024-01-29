import ToDo from "./Todo";
import Albums from "./components/Albums";
import AddItem from "./features/todo/AddItem";

function App() {
  return (
    <>
      <AddItem />
      <ToDo />
      <Albums />
    </>
  );
}

export default App;
