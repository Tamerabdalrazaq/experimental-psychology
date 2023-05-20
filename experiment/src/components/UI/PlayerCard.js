import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { BounceLoader } from "react-spinners";

function PlayerCard({ name, ready, timerOn, wallet }) {
   const currentWallet = useRef(0);
   useEffect(() => {
      currentWallet.current = wallet;
   }, [wallet]);
   return (
      <div className={`player-card ${name === "You" ? "you" : "opponent"}`}>
         {<h3>{name}</h3>}
         <div className="choise-status">
            {!timerOn ? (
               !ready ? (
                  <div className="status-circle gray"></div>
               ) : (
                  <div className="status-circle blue"></div>
               )
            ) : !ready ? (
               <BounceLoader size={20} speedMultiplier={1} />
            ) : (
               <div className="status-circle blue"></div>
            )}
         </div>
         <div className={`wallet ${wallet > 999 ? "small" : ""}`}>
            <CountUp start={currentWallet.current} end={wallet} />
         </div>
      </div>
   );
}

export default PlayerCard;
