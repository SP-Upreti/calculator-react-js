import React, { useState } from 'react';

export default function Main() {

    const [result, setResult] = useState("")

    const handleNumberClick = (value)=>{
        setResult(result + value);
    }
    const handleClearClick = ()=>{
        setResult("")
    }
    const handleEqualClick = ()=>{
        try {
            const problem = result.toString();
        const data = eval(result);
        document.getElementById('history').innerHTML += problem + " = " + data + "<br>";
        setResult(data)
        } catch (error) {
            alert("operator is not used properly..." + error)
        }
    }
    const handleOperatorClick = (operator)=>{
        setResult(result+operator);
    }
    const handlechange = (event)=>{
        setResult(event.target.value)
    }

    const handleequal = ()=>{
        const res = eval(result)
        setResult(res)
    }
     const clearHistory = ()=>{
        document.getElementById('history').innerHTML = "";
     }

    return (
        <>
        <h1>Simple Calculator</h1>
        <div className='main'>
        <div className='calculator'>
        <div className='displayboard'><input onChange={handlechange} value={result} type="text"  /></div>
        <div className="keypad">
            <div className="row">
            <button  onClick={() => handleNumberClick(7)}>7</button>
            <button onClick={() => handleNumberClick(8)}>8</button>
            <button onClick={() => handleNumberClick(9)}>9</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            </div>
            <div className="row">
            <button onClick={() => handleNumberClick(4)}>4</button>
            <button onClick={() => handleNumberClick(5)}>5</button>
            <button onClick={() => handleNumberClick(6)}>6</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            </div>
            <div className="row">
            <button onClick={() => handleNumberClick(1)}>1</button>
            <button onClick={() => handleNumberClick(2)}>2</button>
            <button onClick={() => handleNumberClick(3)}>3</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            </div>
            <div className="row">
            <button onClick={() => handleNumberClick(0)}>0</button>
            <button  onClick={handleEqualClick}>=</button>
            <button onClick={handleClearClick}>C</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
            </div>
      </div>
        </div>
        <div className='hsec'>
            <h2>History</h2>
        <div id='history'>
</div>
        <button onClick={clearHistory}>clear</button>
        </div>
        </div>
        </>
    )
}
  