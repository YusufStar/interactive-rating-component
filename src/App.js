import React, { useState } from "react";
import "./index.css"
import star from "./icon-star.svg"
import submitimage from "./illustration-thank-you.svg"

function App() {
  const [rate, SetRate] = useState(0)
  const [submited, SetSubmited] = useState(false)
  
  return (
    <div className="h-screen bg-very-dark-blue flex items-center justify-center">
      <div className="w-[384px] h-[432px] bg-dark-blue items-center rounded-3xl flex flex-col">
        {!submited ?
        <> 
        <div className="h-[20%] w-[90%] flex items-center">
          <div className="w-[48px] h-[48px] rounded-full bg-[#333944] flex items-center justify-center">
            <img src={star} className="w-[20px] h-[20px]"/>
          </div>
        </div>
        <div className="w-[90%] h-[40%]">
          <h1 className="mt-3 font-medium text-[30px] text-white">How did we do?</h1>
          <p className="mt-3 text-light-grey font-normal text-[15px]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <div className="w-[90%] h-[10%] flex flex-row items-center justify-between">
          <button className={`text-white font-thin text-[15px] w-[45px] h-[45px] rounded-full ${rate == 1 ? "bg-orange":"bg-[#333944]"} hover:bg-light-grey transition-all`} onClick={(e) => e.target.innerHTML == rate ? SetRate(0):SetRate(e.target.innerHTML)}>1</button>
          <button className={`text-white font-thin text-[15px] w-[45px] h-[45px] rounded-full ${rate == 2 ? "bg-orange":"bg-[#333944]"} hover:bg-light-grey transition-all`} onClick={(e) => e.target.innerHTML == rate ? SetRate(0):SetRate(e.target.innerHTML)}>2</button>
          <button className={`text-white font-thin text-[15px] w-[45px] h-[45px] rounded-full ${rate == 3 ? "bg-orange":"bg-[#333944]"} hover:bg-light-grey transition-all`} onClick={(e) => e.target.innerHTML == rate ? SetRate(0):SetRate(e.target.innerHTML)}>3</button>
          <button className={`text-white font-thin text-[15px] w-[45px] h-[45px] rounded-full ${rate == 4 ? "bg-orange":"bg-[#333944]"} hover:bg-light-grey transition-all`} onClick={(e) => e.target.innerHTML == rate ? SetRate(0):SetRate(e.target.innerHTML)}>4</button>
          <button className={`text-white font-thin text-[15px] w-[45px] h-[45px] rounded-full ${rate == 5 ? "bg-orange":"bg-[#333944]"} hover:bg-light-grey transition-all`} onClick={(e) => e.target.innerHTML == rate ? SetRate(0):SetRate(e.target.innerHTML)}>5</button>
        </div>
        <div className="w-[90%] h-[30%] flex items-center justify-center">
          <button onClick={() => rate > 0 ? SetSubmited(true):""} className="w-[100%] h-[33%] rounded-3xl bg-orange text-white">Submit</button>
        </div>
        </>:
        <>
        <div className="h-[50%] gap-5 w-[90%] flex flex-col items-center justify-center">
          <img src={submitimage} alt="" />
          <div className="w-[60%] h-[15%] rounded-2xl bg-[#333944] flex items-center justify-center">
            <h3 className="text-orange">You selected {rate} out of 5</h3>
          </div>
        </div>
        <div className="h-[50%] w-[90%] flex flex-col items-center">
          <h1 className="mt-3 font-medium text-[30px] text-white">Thank You</h1>
          <p className="mt-3 text-center text-medium-grey">We appreciate you taking the time to give a rating if you ever need more support, don't hes,tate to get in touch!</p>
        </div>
        </>
        }
      </div>
    </div>
  );
}

export default App;
