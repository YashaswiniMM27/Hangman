export default function GameStatus({isGameOver, isGameWinner}){
    return (
        <section className="statusContainer">
            {isGameWinner && <div className="gameStatusWin">
            <h3>YOU WIN!<img src="/public/assets/win.png" alt="win" /></h3>
            <p>You got the W, no cap!</p>
        </div>}
        {isGameOver && <div className="gameStatusLoose">
            <h3>YOU LOOSE!<img src="/public/assets/loose.webp" alt="loose" /></h3>
            <p>Well, that was an epic fail</p>
        </div>}
        </section>
    )
}