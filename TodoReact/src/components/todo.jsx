import React from "react";

function ToDo(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    return (
        <p className="toDo" onClick={handleClick}>{props.content}</p>
    );
}
export default ToDo;
