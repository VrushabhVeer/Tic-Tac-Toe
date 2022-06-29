import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
    return (
        <div className="end-game-screen">
            {!draw && <span className="win-text">{player ? "♕ O Won" : "♕ X Won"}</span>}
            {draw && <span className="win-text">Draw Game ☹</span>}

            <span className="win-history">
                X Win - {winCount.X}
                <br />
                O Win - {winCount.O}
            </span>

            <button className="btn" onClick={restartGame}>
                Restart Game ↻
            </button>
            <button className="btn" onClick={clearHistory}>
                Clear History x
            </button>
        </div>
    );
}

export default EndGame;
