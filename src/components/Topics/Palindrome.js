import React, { useState } from "react";



const Palindrome = () => {

    const [ userInput, setUserInput ] = useState('')
    const [ palindrome, setPalindrome] = useState('')

    

    const clickHandler = () = {

    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={inputChangeHandler}></input>
            <button className="confirmationButton" onClick={clickHandler}></button>
            <span className="resultsBox"></span>
        </div>
    )
}

export default Palindrome