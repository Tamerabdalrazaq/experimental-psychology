import React, { useContext, useEffect, useState } from "react";
import Game from "./Game";
import FinishedSet from "../UI/FinishedSet";
import { config } from "../../exp_config/experiment_config";
import { SubjectContext } from "../../context/SubjectContext";

const { GAME_TYPES } = config;

function GameView({ opponent_name, type }) {
   const subjectContext = useContext(SubjectContext);
   const [gameOn, setGameOn] = useState(false);
   const [countdown, setCountdown] = useState(3);
   const [finished, setFinished] = useState(false);

   useEffect(() => {
      setTimeout(() => setGameOn(true), 3000);
      if (type === GAME_TYPES.set_1) subjectContext.resetWallet();
   }, []);

   useEffect(() => {
      const interval = setInterval(() => setCountdown((c) => c - 1), 1000);
      return () => clearInterval(interval);
   }, [countdown]);

   return finished ? (
      <FinishedSet />
   ) : gameOn ? (
      <Game
         opponent_name={opponent_name}
         type={type}
         setFinished={setFinished}
      />
   ) : (
      <div className="pregame-count">
         <div>
            <h1>{countdown}</h1>
         </div>
      </div>
   );
}

export default GameView;
