import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle('');
    setColor('#000000');
  }

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Color title..."></input>
      <input value={color} onChange={(event) => setColor(event.target.value)}  type="color"></input>
      <button>ADD</button>
    </form>

  );
}

export default App;
