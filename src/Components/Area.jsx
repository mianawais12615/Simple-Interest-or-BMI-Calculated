
import { useState } from "react";



function Area(){

 const [arealength,setArealength]  = useState(0)  
 const [areawidth,setAreaWidth]  = useState(0)  
 const [totalarea,setTotalarea]  = useState(0)  

 function Total(e){
    e.preventDefault()
   let area = (arealength * areawidth)
   setTotalarea(area)

 }
    return(
        <div>
            <div> <h1>Area Calculate</h1></div>
         <form onSubmit={Total}>
        <input type="text" placeholder="enter length" onChange={(e) => setArealength(e.target.value)}/>
        <input type="text" placeholder="enter width" onChange={(e) => setAreaWidth(e.target.value)} />
        <button>total area</button>

        <h3>Total Area : {totalarea}</h3><hr />
        </form>
    
        </div>
    )
}

export default Area;
