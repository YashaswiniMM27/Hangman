export default function GameStatus({isGameOver, isGameWinner}){
    return (
        <section className="statusContainer">
            {isGameWinner && <div className="gameStatusWin">
            <h3>YOU WIN!<img src="/assets/win.png" alt="win" loading="lazy"/></h3>
            <p>You got the W, no cap!</p>
        </div>}
        {isGameOver && <div className="gameStatusLoose">
            <h3>YOU LOOSE!<img src="/assets/loose.webp" alt="loose" loading="lazy"/></h3>
            <p>Well, that was an epic fail</p>
        </div>}
        </section>
    )
}