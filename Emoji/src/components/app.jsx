import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function CreateOne(object){
    return(<Emoji 
        img={object.emoji}
        key={object.key}
        name={object.name}
        meaning={object.meaning}
    />)
}

function App() {
  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(CreateOne)}
      </dl>
    </div>
  );
}

export default App;
