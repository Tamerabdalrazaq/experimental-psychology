import ClockLoader from "react-spinners/ClockLoader";
import { config } from "../../exp_config/experiment_config";
import { useEffect, useState } from "react";
import { msToSeconds } from "../../helpers/helpers";

const {
   GAME_CONFIG: { round_timer },
} = config;

function CountDown({ timeOutCB }) {
   const [start] = useState(Date.now());
   const [now, setNow] = useState(start);
   const counter = round_timer - (now - start);
   useEffect(() => {
      let myInterval = setInterval(() => {
         if (counter <= 0) {
            clearInterval(myInterval);
            timeOutCB();
         } else setNow(Date.now());
      }, 100);
      return () => {
         clearInterval(myInterval);
      };
   }, [now]);

   return (
      <div>
         <div>
            <ClockLoader />
         </div>
         <div>
            <h2>{msToSeconds(counter)}</h2>
         </div>
      </div>
   );
}

export default CountDown;
