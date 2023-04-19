import { useSelector } from "react-redux";

function CounterUser() {
  const { c } = useSelector((state) => state.counter);

  return <h2>Counter : {c}</h2>;
}

export default CounterUser;
