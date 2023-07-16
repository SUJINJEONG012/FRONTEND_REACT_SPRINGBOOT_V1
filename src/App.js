import "./App.css";
import Todo from "./Todo";
import React, { useEffect, useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";
import {call} from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  
useEffect(() => {
  call("/todo", "GET", null)
  .then((response) => setItems(response.data));
}, []);

  const addItem = (item) => {
    call("/todo", "POST", null)
    .then((response) => setItems(response.data));
  };

  const editItem = () => {
    setItems([...items]);
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", null)
    .then((response) => setItems(response.data));
  }

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );
  return (<div className="App">
        <Container maxWidth="md">
          <AddTodo addItem={addItem} /> 
          <div className="TodoList">{todoItems}</div>
        </Container>
  </div>);
}

export default App;