import Todo from './Todo';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
    id : "0",
    title: "Hello React1 ",
    done : true
    },

    {
      id : "1",
      title: "Hello React2 ",
      done : true
      },
  ]);

  let todoItems = items.length > 0 && items.map((item)=> <Todo item = {item} key={item.id}/>);
  return (
    <div className="App">
     {todoItems}
    </div>
  );

  
}

export default App;
