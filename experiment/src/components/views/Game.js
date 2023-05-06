import { useContext, useEffect, useRef, useState } from "react";
import CountDown from "../UI/CountDown";
import PlayerCard from "../UI/PlayerCard";
import { SubjectContext } from "../../context/SubjectContext";
import ChoiseIcon from "../UI/ChoiseIcon";
import { config } from "../../exp_config/experiment_config";
import { getComputerDecision, randRange } from "../../helpers/helpers";

const initialInputs = {
   subject: null,
   computer: null,
};

const {
   rounds,
   inputs: { COOPORATE_KEY, SOLO_KEY },
   computer_delay: COMPUTER_DELAY,
} = config.GAME_CONFIG;

function Game({ opponent_name, type }) {
   const subjectContext = useContext(SubjectContext);
   const set_history = subjectContext[type];
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
   }, [timerOn]);

   useEffect(() => {
      if (computertChoise)
         console.error("Timer on while generating computer response");
      const rand_time = randRange(COMPUTER_DELAY[0], COMPUTER_DELAY[1]);
      const timeout = setTimeout(() => {
         console.log("channing comp choiise");
         setComputertChoise(getComputerDecision(set_history.current));
         currentInputs.current.computer = COOPORATE_KEY;
         checkRoundEnd();
      }, rand_time);
      return () => clearTimeout(timeout);
   }, [round]);

   function onTimeOut() {
      if (!timerOn) return;
      setTimerOn(false);
      setTimeout(() => {
         resetRound();
      }, 2000);
   }

   function resetRound() {
      if (bothPlayersReady()) {
         set_history.current.push([
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
      if (!timerOn || currentInputs.current.subject) return;
      setSubjectChoise(choise);
      currentInputs.current.subject = choise;
      checkRoundEnd(choise);
   };

   const handleKeyPress = (e) => {
      if ([`Key${SOLO_KEY}`, `Key${COOPORATE_KEY}`].includes(e.code))
         buttonClick(e.code.slice(-1));
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
            <button
               disabled={!timerOn || subjectChoise}
               onClick={() => buttonClick(SOLO_KEY)}
            >
               Solo-Move (Press {SOLO_KEY})
            </button>
            <button
               disabled={!timerOn || subjectChoise}
               onClick={() => buttonClick(COOPORATE_KEY)}
            >
               Cooporate (Press {COOPORATE_KEY})
            </button>
         </div>
         {timerOn && (
            <div className="floating-timer">
               <CountDown timeOutCB={onTimeOut} />
            </div>
         )}
         {`round: ${set_history.current.length}\\${rounds}`}
      </div>
   );
}

export default Game;
