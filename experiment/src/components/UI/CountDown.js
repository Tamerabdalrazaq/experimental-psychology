import { config } from "../../exp_config/experiment_config";
import { useEffect, useState } from "react";
import { msToSeconds } from "../../helpers/helpers";

const {
   GAME_CONFIG: { round_timer },
} = config;

function CountDown({ timeOutCB }) {
   const [counter, setCounter] = useState(round_timer / 1000);

   useEffect(() => {
      let myInterval = setInterval(() => {
         if (counter <= 0) {
            clearInterval(myInterval);
            timeOutCB();
         } else setCounter((current) => current - 1);
      }, 1000);
      return () => {
         clearInterval(myInterval);
      };
   }, [counter]);

   return (
      <div>
         <div>
            <h2>{counter != 0 ? counter : <h6>Time Out - Restarting..</h6>}</h2>
         </div>
      </div>
   );
}

export default CountDown;
