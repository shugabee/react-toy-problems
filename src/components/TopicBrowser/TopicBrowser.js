import React from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObjects from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

function TopicBrowser() {
    return ( <div>
        <p>Hello World</p>
        <div>
            <EvenAndOdd />
            <FilterObjects />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
        </div>
    )
}



export default TopicBrowser