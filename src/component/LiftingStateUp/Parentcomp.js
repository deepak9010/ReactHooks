import React from "react";
import ChildComp from "./Childcomp";

function ParentComp() {

    function getData(data){
      console.log(data);
    }
    
    return(
      <div>
         <ChildComp data={getData}/>
      </div>
    )
}

export default ParentComp;


