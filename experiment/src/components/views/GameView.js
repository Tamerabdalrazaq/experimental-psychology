import { useState } from "react";
import CountDown from "../UI/CountDown";
import PlayerCard from "../UI/PlayerCard";

function GameView({ opponent_name }) {
   const [subjectChoise, setSubjectChoise] = useState(null);
   const [computertChoise, setCcomputertChoise] = useState(null);
   const [timerOn, setTimerOn] = useState(true);

   function onTimeOut() {
      setTimerOn(false);
   }
   return (
      <div className="game-view">
         <div className="players">
            <div className="col">
               <PlayerCard name={"You"} ready={subjectChoise} />
               {!timerOn && <div className="choise-slider">{}</div>}
            </div>
            <div className="col">
               <PlayerCard name={opponent_name} ready={computertChoise} />
            </div>
         </div>
         <div className="buttons">
            <button onClick={() => setSubjectChoise("D")}>
               Solo-Move (Press "D")
            </button>
            <button onClick={() => setSubjectChoise("K")}>
               Cooporate (Press "K")
            </button>
         </div>
         {timerOn && (
            <div className="floating-timer">
               <CountDown timeOutCB={onTimeOut} />
            </div>
         )}
      </div>
   );
}

export default GameView;
