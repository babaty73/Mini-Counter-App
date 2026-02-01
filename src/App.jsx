import Header from "./Header.jsx";
import AddButton from "./AddButton.jsx";
import SubButton from "./SubButton.jsx";
import ResetButton from "./ResetButton.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function add() {
    return setCount(count + 1);
  }
  function sub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function reset() {
    return setCount(0);
  }
  return (
    <>
      <Header count={count} />
      <AddButton onClick={add} />
      <ResetButton onClick={reset}></ResetButton>
      <SubButton onClick={sub} count={count} />
    </>
  );
}

export default App;
