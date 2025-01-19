export default function GameStatus({isGameOver, isGameWinner}){
    return (
        <section className="statusContainer">
            {isGameWinner && <div className="gameStatusWin">
            <h3>YOU WIN!<img src="/src/assets/party-popper.png" alt="partPopper" /></h3>
            <p>You got the W, no cap!</p>
        </div>}
        {isGameOver && <div className="gameStatusLoose">
            <h3>YOU LOOSE!<img src="/src/assets/loose.webp" alt="partPopper" /></h3>
            <p>Well, that was an epic fail</p>
        </div>}
        </section>
    )
}