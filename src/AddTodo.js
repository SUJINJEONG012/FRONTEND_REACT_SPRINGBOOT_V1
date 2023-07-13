import React, {useState} from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
    //사용자의 입력을 저장할 오브젝트
    const[item, setItem] = useState({title: ""})
   
    // onInputChange 함수 작성, e는 매개변수, 사용자가 입력한 값
    const onInputChange = (e)=>{
        setItem({title : e.target.value});
        console.log(item);
    }



    // onInputChange 함수 TextField에 연결 
    return (
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                 {/* onChange */}
                <TextField placeholder="Add Todo here" fullWidth 
                onChange={onInputChange} value ={item.title}/>
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height:'100%'}} color="secondary" variant="outlined">
                        +
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddTodo;