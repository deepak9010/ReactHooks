import React from "react";
import { useState } from "react";

function ChildComp(props) {
     const [name, setName] = useState("");

     const handlechange=(e)=>{
      setName(e.target.value);
     }
     
     function handleSubmit(e){
      e.preventDefault();
      props.data(name)
     }

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handlechange}></input>

          <button>submit</button>
        </form>
         
      </div>
    )
}

export default ChildComp;


