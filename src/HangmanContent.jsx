import GameStatus from "./components/GameStatus";
import Guess from "./components/GuessingSection";
import Hangman from "./components/hangman";
import Header from "./components/header";

export default function HangmanMainContent(){
    return(
        <main className="hangman">
            <Header/>
            <Guess/>
        </main>
    )
}