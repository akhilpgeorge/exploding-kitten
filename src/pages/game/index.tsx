import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const GamePage: React.FC = () => {
    const [gameStatus, setGameStatus] = useState();
    const dispatch = useDispatch();
    const startGame = () => {
        dispatch({type: "SET_GAME_STATUS", payload: "INPROGRESS"});
    }

    return (
        <div>
            <button onClick={startGame}>START</button>
        </div>
    );
}