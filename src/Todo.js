import React, {useState} from "react";
import {
    ListItem,
    ListItemText, 
    InputBase, 
    Checkbox, 
    ListItemSecondaryAction, 
    IconButton} from "@mui/material";

import DeleteOutlined from "@mui/icons-material/DeleteOutlined";


const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    // boolean 형의 readOnly 변수를 추가
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.editItem;
    //삭제
    const deleteItem = props.deleteItem;
    
    const editEventHandler = (e) => {
        item.title = e.target.value;
        editItem();
    };
    const checkboxEventHandler = (e)=>{
        item.done = e.target.checked;
        editItem();
    }

    //deleteEventHandler 작성 , App.js에서 만든 deleteItem 함수연결
    const deleteEventHandler = ()=>{
        deleteItem(item);
    }

    //turnOffReadOnly()함수 작성
    const turnOffReadOnly = () =>{
        setReadOnly(false);
    }
    //trueOnReadOnly() 함수 작성
    const turnOnReadOnly = (e) =>{
        if(e.key === 'Enter'){
            setReadOnly(true);
        }
    };



    return (  
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase 
                 inputProps={{"aria-label": "naked", 
                 readOnly : readOnly}}
                 onClick ={turnOffReadOnly}
                 onKeyDown={turnOnReadOnly}
                 onChange={editEventHandler}
                 type="text"
                 id={item.id}
                 name={item.id}
                 value={item.title}
                 multiline={true}
                 fullWidth={true}
                />
            </ListItemText>



            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );
};

export default Todo;