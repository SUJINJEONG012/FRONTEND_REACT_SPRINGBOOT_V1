import Todo from './Todo';
import React, {useState} from 'react';
import './App.css';
import {Container, List, Paper} from "@mui/material";
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([
    {
    id : "0",
    title: "Hello React1 ",
    done : true,
    },

    {
      id : "1",
      title: "Hello React2 ",
      done : true,
      },
  ]);

  const addItem = (item) =>{
    item.id = "ID-" + items.length;  //key 를 위한 id
    item.done= false; // done 초기화
    //업데이트는 반드시  setItem로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items: " ,items);
  };

  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
          {items.map((item) => (
          <Todo item = {item} key={item.id} />
          ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
     
    </div>
  );

  
}

export default App;
