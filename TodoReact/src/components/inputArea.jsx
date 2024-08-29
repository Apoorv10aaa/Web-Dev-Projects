import React,{useState} from "react";

function InputArea(props){
    const [toDo,setTodo]=useState("");

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleClick(){
        props.onAdd(toDo);
        setTodo("");
    }

    return(<div className="form">
        <input type="text" value={toDo} onChange={handleChange}></input>
        <button onClick={handleClick}><span>Add</span></button>
        </div>
    );
}

export default InputArea;