import ClockLoader from "react-spinners/ClockLoader";
import { config } from "../../exp_config/experiment_config";
import { useEffect, useState } from "react";
import { msToSeconds } from "../../helpers/helpers";

const {
   GAME_CONFIG: { round_timer },
} = config;

function CountDown({ timeOutCB }) {
   const [ms, setMs] = useState(round_timer);
   useEffect(() => {
      let myInterval = setInterval(() => {
         if (ms <= 0) {
            clearInterval(myInterval);
            timeOutCB();
         } else setMs((ms) => ms - 250);
      }, 250);
      return () => {
         clearInterval(myInterval);
      };
   });

   return (
      <div>
         <div>
            <ClockLoader />
         </div>
         <div>
            <h2>{msToSeconds(ms)}</h2>
         </div>
      </div>
   );
}

export default CountDown;
