import React, { useState } from "react";



const Palindrome = () => {

    const [ userInput, setUserInput ] = useState('');
    const [ palindrome, setPalindrome ] = useState('');

    const clickHandler = () => {
        let forwards = userInput;
        let backwards = userInput.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(backwards === forwards){
            setPalindrome('true')
        } else{
            setPalindrome('false')
        }
        
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input onChange={(e) => setUserInput(e.target.value)} className="inputLine" ></input>
            <button onClick={clickHandler} className="confirmationButton">Check</button>
            <span className="resultsBox">Palindrome: {palindrome}</span>
        </div>
    )
}

export default Palindrome