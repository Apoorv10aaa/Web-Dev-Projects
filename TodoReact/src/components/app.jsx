import React,{useState}from "react";
import InputArea from "./inputArea";
import ToDo from "./todo";

function App(){
    const [toDos,setToDos]=useState([]);

    function addToDo(item){
        setToDos(prev => {
            return([...prev,item]);
        });
    }

    function deleteToDo(id){
        setToDos(toDos.filter((item,index)=>{
            return index!==id ;
        }));
    }

    return(
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div> 
        <InputArea 
            onAdd={addToDo}
        />
        {toDos.map((item,index)=> {
            return (<ToDo
                id={index}
                onDelete={deleteToDo} 
                key={index}
                content={item}
            />);
        })}
    </div>);
}

export default App;