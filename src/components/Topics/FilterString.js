import React, { useState } from "react";

function FilterString() {
    const [unFilteredArray, setUnFilteredArray] = useState([
        "red",
        "orange",
        "yellow", 
        "green", 
        "blue", 
        "purple"
    ])
    const [userInput, setUserInput] = useState("")
    const [filteredArray, setFilteredArray] = useState([])
    
    const clickHandler = () => {
        let colors = unFilteredArray
        let filteredArray = []

      
  
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Colors: {JSON.stringify(unFilteredArray)}</span>
            <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={clickHandler}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered Colors: {JSON.stringify(filteredArray)}</span>
        </div>
    )
}

export default FilterString