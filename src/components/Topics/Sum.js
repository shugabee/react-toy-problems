import React, { useState } from "react";

function Sum() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(null);

    const clickHandler = () => {
        setSum(+number1 + +number2)
    }

    return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input onChange={(e) => setNumber1(e.target.value)} className="inputLine"/>
            <input onChange={(e) => setNumber2(e.target.value)} className="inputLine"/>
            <button onClick={clickHandler} className="confirmationButton">Add</button>
            <span className="resultsBox">Sum: {sum}</span>
        </div>
    )
}

export default Sum