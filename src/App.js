import Todo from './Todo';
import React, {useState} from 'react';
import './App.css';
import {Container, List, Paper} from "@mui/material";
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  // 아이템 추가하기
  const addItem = (item) =>{
    item.id = "ID-" + items.length;  //key 를 위한 id
    item.done= false; // done 초기화
    //업데이트는 반드시  setItem로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items: " ,items);
  };
  // 아이템 삭제하기
  const deleteItem = (item)=>{
    // 삭제할 아이템을 찾는다.
    const newItems = items.filter(e => e.id !== item.id);
   // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
   setItems([...newItems]); 
  }

  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
          {items.map((item) => (
          <Todo item = {item} key={item.id} deleteItem={deleteItem}/>
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
