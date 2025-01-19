import GameStatus from "./components/GameStatus";
import Hangman from "./components/hangman";
import Header from "./components/header";

export default function HangmanMainContent(){
    return(
        <main className="hangman">
            <Header/>
            <GameStatus/>
            <Hangman/>
        </main>
    )
}