import React, {
   forwardRef,
   useContext,
   useEffect,
   useImperativeHandle,
   useState,
} from "react";
import Game from "./Game";
import FinishedSet from "../UI/FinishedSet";
import { config } from "../../exp_config/experiment_config";
import { SubjectContext } from "../../context/SubjectContext";

const { GAME_TYPES } = config;

const GameView = forwardRef(({ type, opponent_name, your_name }, ref) => {
   const learning = type === GAME_TYPES.learning;
   const subjectContext = useContext(SubjectContext);
   const [gameOn, setGameOn] = useState(learning);
   const [countdown, setCountdown] = useState(3);
   const [finished, setFinished] = useState(false);

   const set_history = subjectContext[type];
   const rounds = config.GAME_CONFIG.rounds[type];

   useImperativeHandle(ref, () => ({
      allow_next() {
         // return subjectFinishedSet();
         return true;
      },
   }));

   function subjectFinishedSet() {
      return set_history.current.length >= rounds || finished;
   }

   useEffect(() => {
      setTimeout(() => setGameOn(true), 3000);
      if (type === GAME_TYPES.set_1 || type === GAME_TYPES.training)
         subjectContext.resetWallet();
   }, []);

   useEffect(() => {
      if (!learning) {
         const interval = setInterval(() => setCountdown((c) => c - 1), 1000);
         return () => clearInterval(interval);
      }
   }, [countdown]);

   return subjectFinishedSet() ? (
      <FinishedSet />
   ) : gameOn || learning ? (
      <Game
         opponent_name={
            opponent_name ||
            subjectContext.getOpName(type === GAME_TYPES.training)
         }
         type={type}
         setFinished={setFinished}
         your_name={your_name}
         rounds={rounds}
      />
   ) : (
      <div className="pregame-count">
         <div>
            <h1>{countdown}</h1>
         </div>
      </div>
   );
});

export default GameView;
