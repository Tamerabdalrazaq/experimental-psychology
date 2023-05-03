import React from "react";
import { BounceLoader } from "react-spinners";

function PlayerCard({ name, ready, timerOn }) {
   return (
      <div className="player-card opponent">
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
      </div>
   );
}

export default PlayerCard;
