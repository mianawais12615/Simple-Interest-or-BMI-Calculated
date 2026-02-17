import { useState } from "react";



function bmicalculater(){

const[weight,setWeight] = useState(0)
const[height,setHeight] = useState(0)
const[BMICalculate,setBMICalculate] = useState(0)

function Calculate(e){
  e.preventDefault()
  let formula = (weight/(height)**2)
  setBMICalculate(formula)

}

  return (
    <div>
      <h1>BMI Calculater</h1>
    <form onSubmit={Calculate}>
      <input type="text" name="weight" id="weight" placeholder="weight in kilogram" onChange={(e) =>setWeight (e.target.value)} />
      <input type="text" name="height"  id="height" placeholder="Height in meter" onChange={(e) => setHeight(e.target.value)} /><br />
   <button>BMI Calculate</button>

      <h3>BMI: {BMICalculate}</h3><hr />

     </form>

    </div>
  )
}

export default bmicalculater;