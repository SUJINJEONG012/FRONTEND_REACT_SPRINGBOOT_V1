import Todo from './Todo';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState({
    id : "0",
    title: "Hello React1 ",
    done : true}
    );

  return (
    <div className="App">
      <Todo item={item}/>
    </div>
  );

  
}

export default App;
