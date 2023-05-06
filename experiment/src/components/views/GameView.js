import React, { useEffect, useState } from "react";
import Game from "./Game";

function GameView({ opponent_name, type }) {
   const [gameOn, setGameOn] = useState(false);
   const [countdown, setCountdown] = useState(3);
   useEffect(() => {
      setTimeout(() => setGameOn(true), 3000);
   }, []);
   useEffect(() => {
      const interval = setInterval(() => setCountdown((c) => c - 1), 1000);
      return () => clearInterval(interval);
   }, [countdown]);

   return gameOn ? (
      <Game opponent_name={opponent_name} type={type} />
   ) : (
      <div className="pregame-count">
         <div>
            <h1>{countdown}</h1>
         </div>
      </div>
   );
}

export default GameView;
