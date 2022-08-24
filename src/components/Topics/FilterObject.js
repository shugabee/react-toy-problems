import React, { useState } from "react";

function FilterObjects() {
    const [unFilteredArray, setUnFilteredArray] = useState([{
        fruit: "peach",
        price: 3, 
        isGood: true
    }, {
        veggie: "cucumber",
        price: 1
    }])
    const [userInput, setUserInput] = useState("") 
    const [filteredArray, setFilteredArray] = useState([])

    const clickHandler = () => {
        setFilteredArray(unFilteredArray.filter(arr => 
            arr.hasOwnProperty(userInput)))
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON.stringify(unFilteredArray)}</span>
            <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={clickHandler}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray)}</span>
        </div>

    )
}

export default FilterObjects