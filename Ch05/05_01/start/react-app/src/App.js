import "./App.css";
import { useRef } from "react";

function App() {
  const textTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`)
    textTitle.current.value = '';
    hexColor.current.value = '';
  }

  return (
    <form onSubmit={submit}>
      <input ref={textTitle} type="text" placeholder="Color title..."></input>
      <input ref={hexColor} type="color"></input>
      <button>ADD</button>
    </form>

  );
}

export default App;
