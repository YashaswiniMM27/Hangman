import { useState } from "react"

export default function Guess(){
    
    const [currentWord, setCurrentWord] = useState("React")

    const alphabet = "qwertyuiopasdfghjklzxcvbnm"

    const letterElements = currentWord.split("").map((letter, index) => {
        return <span key={index} className="">{letter.toUpperCase()}</span>
    })

    const keyboardElement = alphabet.split("").map((alphabet, index) => {
        return <button key={index}>{alphabet.toUpperCase()}</button>
    })

    return (
        <div className="guessingSection">
            <div className="wordSection">
                {letterElements}
            </div>
            <div className="keyboard">
                {keyboardElement}
            </div>
            <button className="newGameBtn">
                NEW GAME
            </button>
        </div>
    )
}