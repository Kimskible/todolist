import React from 'react';
import './../display.css';


function Body() {
  return(
    <div className="to-do-form">
      <form className="form">
        <label for="todo"> Add Item </label>
        <input type="text" id="todo" name="todo"></input>
        <button type="button"> Add Item </button>
      </form>
        
    </div>
  )
  
}

export default Body;