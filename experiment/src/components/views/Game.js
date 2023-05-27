import { useContext, useEffect, useRef, useState } from "react";
import CountDown from "../UI/CountDown";
import PlayerCard from "../UI/PlayerCard";
import { SubjectContext } from "../../context/SubjectContext";
import ChoiseIcon from "../UI/ChoiseIcon";
import { config, tutorial_steps } from "../../exp_config/experiment_config";
import {
   getComputerDecision,
   getRewards,
   getTutorialByLang,
   randRange,
} from "../../helpers/helpers";
import Tour from "reactour";
import useTour from "../../features/useTour";

const initialInputs = {
   subject: null,
   computer: null,
};

const { GAME_TYPES } = config;

const {
   inputs: { COOPORATE_KEY, SOLO_KEY },
   computer_delay: COMPUTER_DELAY,
} = config.GAME_CONFIG;

function Game({ opponent_name, type, setFinished, your_name, rounds }) {
   const subjectContext = useContext(SubjectContext);
   const set_history = subjectContext[type];
   const [subjectChoise, setSubjectChoise] = useState(null);
   const [computertChoise, setComputertChoise] = useState(null);
   const [timerOn, setTimerOn] = useState(true);
   const [round, setRound] = useState(0);
   const [subjectWallet, setSubjectWallet] = useState(0);
   const [computerWallet, setComputerWallet] = useState(0);
   const { closeTour, tourOn } = useTour(type);
   const lang = subjectContext.lang || "EN";

   const currentInputs = useRef({ ...initialInputs });

   useEffect(() => {
      setSubjectWallet(subjectContext.wallet.current.subject);
      setComputerWallet(subjectContext.wallet.current.computer);
   }, []);

   useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
         window.removeEventListener("keydown", handleKeyPress);
      };
   }, [timerOn, tourOn]);

   useEffect(() => {
      if (set_history.current.length >= rounds) return setFinished(true);
      const rand_time = randRange(COMPUTER_DELAY[0], COMPUTER_DELAY[1]);
      const timeout = setTimeout(() => {
         const choise = getComputerDecision(set_history.current);
         setComputertChoise(choise);
         currentInputs.current.computer = choise;
         checkRoundEnd();
      }, rand_time);
      return () => clearTimeout(timeout);
   }, [round]);

   function onTimeOut() {
      if (!timerOn) return;
      setTimerOn(false);
      bothPlayersReady() && updateWallet();
      setTimeout(() => {
         resetRound();
      }, 2000);
   }

   function updateWallet() {
      const [sub, comp] = getRewards(
         currentInputs.current.subject,
         currentInputs.current.computer
      );
      const updated_subject_wallet =
         subjectContext.wallet.current.subject + sub;
      const updated_computer_wallet =
         subjectContext.wallet.current.computer + comp;

      subjectContext.wallet.current = {
         subject: subjectContext.wallet.current.subject + sub,
         computer: subjectContext.wallet.current.computer + comp,
      };
      setSubjectWallet(updated_subject_wallet);
      setComputerWallet(updated_computer_wallet);
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
      if (!timerOn || currentInputs.current.subject || tourOn) return;
      setSubjectChoise(choise);
      currentInputs.current.subject = choise;
      checkRoundEnd(choise);
   };

   const handleKeyPress = (e) => {
      if ([`Key${SOLO_KEY}`, `Key${COOPORATE_KEY}`].includes(e.code))
         buttonClick(e.code.slice(-1));
   };

   return (
      <>
         {tourOn && (
            <Tour
               steps={getTutorialByLang(lang)}
               isOpen={type === GAME_TYPES.learning}
               onRequestClose={closeTour}
            />
         )}
         <div className="game-view">
            <div className="players">
               <div className="player_row">
                  <PlayerCard
                     name={opponent_name}
                     type={"OPPONENT"}
                     timerOn={timerOn}
                     ready={computertChoise}
                     wallet={computerWallet}
                  />
                  {bothPlayersReady() && (
                     <ChoiseIcon choise={computertChoise} top={true} />
                  )}
               </div>
               <div className="choise-buttons">
                  <button
                     disabled={!timerOn || subjectChoise}
                     onClick={() => buttonClick(SOLO_KEY)}
                  >
                     Solo-Move (Press {SOLO_KEY})
                  </button>
                  <div className="floating-timer">
                     {!tourOn && timerOn && <CountDown timeOutCB={onTimeOut} />}
                  </div>
                  <button
                     disabled={!timerOn || subjectChoise}
                     onClick={() => buttonClick(COOPORATE_KEY)}
                  >
                     Cooporate (Press {COOPORATE_KEY})
                  </button>
               </div>
               <div className="player_row">
                  <PlayerCard
                     name={your_name}
                     type={"YOU"}
                     timerOn={timerOn}
                     ready={subjectChoise}
                     wallet={subjectWallet}
                  />
                  {bothPlayersReady() && (
                     <ChoiseIcon choise={subjectChoise} top={false} />
                  )}
               </div>
            </div>
            {/* <span className="round-num">
               {`round: ${set_history.current.length}\\${rounds}`}
            </span> */}
         </div>
      </>
   );
}

export default Game;
