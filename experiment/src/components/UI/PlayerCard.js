import React from "react";
import { BounceLoader } from "react-spinners";

function PlayerCard({ name, ready }) {
   return (
      <div className="player-card opponent">
         {<h3>{name}</h3>}
         <div className="choise-status">
            {!ready ? (
               <BounceLoader size={20} speedMultiplier={1} />
            ) : (
               <div className="green-circle"></div>
            )}
         </div>
      </div>
   );
}

export default PlayerCard;
