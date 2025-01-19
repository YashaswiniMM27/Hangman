import { useState } from "react"
import Hangman from "./hangman"
import GameStatus from "./GameStatus"
import { getRandonWord } from "../helpers/getRandomWord"

export default function Guess(){
    
    const [currentWord, setCurrentWord] = useState(getRandonWord())

    const [lettersChosen, setLettersChosen] = useState([])

    const wrongGuessCount = lettersChosen.filter(letter => !currentWord.includes(letter)).length

    const disable = wrongGuessCount >= 6

    const hasWon = currentWord.split("").every((letter) => lettersChosen.includes(letter));

    const alphabet = "qwertyuiopasdfghjklzxcvbnm"

    const letterElements = currentWord.split("").map((letter, index) => {
        return (
            disable ?  <span key={index} className="">{letter.toUpperCase()}</span> :
            <span key={index}>{lettersChosen.includes(letter) ? letter.toUpperCase() : ""}</span>
        )
    })

    const keyboardElement = alphabet.split("").map((letter, index) => {
        const isGuessed = lettersChosen.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = isCorrect
        ? "correct"
        : isWrong
        ? "wrong"
        : "";

        
        return <button className={className} key={index} onClick={() => ChooseLetter(letter)} disabled={disable}>{letter.toUpperCase()}</button>
    })

    function ChooseLetter(letter){
        setLettersChosen(prevLetters => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter])
    }


    return (
        <div className="guessingSection">
            <GameStatus isGameOver={disable} isGameWinner={hasWon}/>
            <Hangman wrongGuessCount={wrongGuessCount} />
            <div className="wordSection">{letterElements}</div>
            <div className="keyboard">{keyboardElement}</div>
            {disable && <button className="newGameBtn" onClick={() => window.location.reload()}>NEW GAME</button>}
        </div>
    )
}