import GameStatus from "./components/GameStatus";
import Header from "./components/header";

export default function Hangman(){
    return(
        <main className="hangman">
            <Header/>
            <GameStatus/>
        </main>
    )
}