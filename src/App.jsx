import { useState } from "react";
import { MdClose } from "react-icons/md";

const message=[
  "Welcome!!!!❤️",
  "How are you??🥰",
  "Take Care, Stay Safe♍"
]


function App() {
  const [step,setStep] = useState(1);
  const [isOpen,setIsOpen]= useState(true);

  function handleDecrease(){
    if(step>1){
    setStep(step-1)
  }
  }

  function handleIncrease(){
    if(step<3){
    setStep(step+1)
  }
  }

  function changeHandler(){
    setIsOpen(!isOpen)
  }
  
  return (
    <>
    <MdClose className="close" size={50} onClick={changeHandler}/>
      {isOpen&&(
      <div className="container">

        <p className="main">Message from Subodh</p>
        <div className="numbers">
          <div className={step>=1?"active":""}>1</div>
          <div className={step>=2?"active":""}>2</div>
          <div className={step>=3?"active":""}>3</div>
        </div>
        <p className="msg">{message[step-1]}</p>
        <div className="btn">
          <button style={{backgroundColor:"#37123C", border:"none", color:"#FFFFFF"}} onClick={handleDecrease}>Previous</button>
          <button style={{backgroundColor:"#37123C", border:"none", color:"#FFFFFF"}} onClick={handleIncrease}>Next</button>
        </div>
      </div>
      )}
    </>
  )
}

export default App
