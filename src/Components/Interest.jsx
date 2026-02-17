import "./Interest.css"
import { useState } from "react";




function Interest(){

const [principal,setPrincipal] = useState(0)
const [rate,setRate] = useState(0)
const [time,setTime] = useState(0)
const [sivalue,setSivalue] = useState(0)

    function SI(e){
        e.preventDefault()
        const formula = (principal*rate*time)/100
        setSivalue(formula)

    }
    return(
        <div className="interestbody">
       
          <h1 className="heading">Simple Interest</h1>

         <form onSubmit={SI}>
            <input type="text" className="Principal" id="Principal" placeholder="Enter Amount" onChange={(e) => setPrincipal(e.target.value)}/>
            <input type="text" className="rate" id="rate" placeholder="Rate of Interest" onChange={(e) => setRate(e.target.value)} />
             <input type="text" className="Time" id="Time" placeholder=" Time" onChange={(e) => setTime(e.target.value)} /> <br />
            <button className="btn">SI</button>
            <h3 >Simple Interest = {sivalue}</h3><hr />
         </form>
        </div>
    )
}


export default Interest;