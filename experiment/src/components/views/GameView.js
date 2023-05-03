import { useContext, useEffect, useRef, useState } from "react";
import CountDown from "../UI/CountDown";
import PlayerCard from "../UI/PlayerCard";
import { SubjectContext } from "../../context/SubjectContext";
import ChoiseIcon from "../UI/ChoiseIcon";
import { config } from "../../exp_config/experiment_config";

const initialInputs = {
   subject: null,
   computer: null,
};

const { rounds } = config.GAME_CONFIG;

function GameView({ opponent_name }) {
   const subjectContext = useContext(SubjectContext);
   const { trainingSet } = subjectContext;
   console.log(trainingSet.current);
   const [subjectChoise, setSubjectChoise] = useState(null);
   const [computertChoise, setComputertChoise] = useState(null);
   const [timerOn, setTimerOn] = useState(true);
   const [round, setRound] = useState(0);

   const currentInputs = useRef({ ...initialInputs });

   useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
         window.removeEventListener("keydown", handleKeyPress);
      };
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setComputertChoise("K");
         currentInputs.current.computer = "K";
         checkRoundEnd();
      }, 1500);
   }, [round]);

   function onTimeOut() {
      setTimerOn(false);
      setTimeout(() => {
         resetRound();
      }, 2000);
   }

   function resetRound() {
      if (bothPlayersReady()) {
         trainingSet.current.push([
            currentInputs.current.subject,
            currentInputs.current.computer,
         ]);
      }
      currentInputs.current = { ...initialInputs };
      setSubjectChoise(null);
      setComputertChoise(null);
      setTimerOn(true);
      setRound((round) => round + 1);
   }

   const bothPlayersReady = () =>
      currentInputs.current.computer && currentInputs.current.subject;

   const checkRoundEnd = () => {
      if (bothPlayersReady()) {
         onTimeOut();
      }
   };

   const buttonClick = (choise) => {
      setSubjectChoise(choise);
      currentInputs.current.subject = choise;
      checkRoundEnd(choise);
   };

   const handleKeyPress = (e) => {
      if (["d", "D", "k", "K"].includes(e.key))
         buttonClick(e.key.toUpperCase());
   };

   return (
      <div className="game-view">
         <div className="players">
            <div className="col">
               <PlayerCard
                  name={"You"}
                  timerOn={timerOn}
                  ready={subjectChoise}
               />
               {bothPlayersReady() && <ChoiseIcon choise={subjectChoise} />}
            </div>
            <div className="col">
               <PlayerCard
                  name={opponent_name}
                  timerOn={timerOn}
                  ready={computertChoise}
               />
               {bothPlayersReady() && <ChoiseIcon choise={computertChoise} />}
            </div>
         </div>
         <div className="buttons">
            <button disabled={!timerOn} onClick={() => buttonClick("D")}>
               Solo-Move (Press "D")
            </button>
            <button disabled={!timerOn} onClick={() => buttonClick("K")}>
               Cooporate (Press "K")
            </button>
         </div>
         {timerOn && (
            <div className="floating-timer">
               <CountDown timeOutCB={onTimeOut} />
            </div>
         )}
         {`round: ${trainingSet.current.length}\\${rounds}`}
      </div>
   );
}

export default GameView;
