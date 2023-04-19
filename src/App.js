import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import CounterUser from "./users/CounterUser";

function App() {
  const dispatch = useDispatch();

  const { c } = useSelector((state) => state.counter);
  const addBtn = () => {
    dispatch({
      type: "increment"
    });
  };

  const minusBtn = () => {
    dispatch({
      type: "decrement"
    });
  };

  const addBtn10 = () => {
    dispatch({
      type: "incrementByValue",
      payload: 10
    });
  };

  const reset = () => {
    dispatch({
      type: "reset"
    });
  };

  return (
    <div className="App">
      <h1>{c}</h1>
      <CounterUser />
      <button onClick={addBtn}>Add + 1</button>
      <button onClick={minusBtn}>Add - 1</button>
      <button onClick={addBtn10}>Add + 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
