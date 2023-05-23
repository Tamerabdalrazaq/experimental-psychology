import React from "react";

function InstructionsView({ title, instructions }) {
   return (
      <div className="instructions-view">
         {title && <h1>{title}</h1>}
         {instructions.map((instruction, i) => {
            return typeof instruction === "string" ? (
               <p key={i}>{instruction}</p>
            ) : (
               <span key={i}>{instruction}</span>
            );
         })}
      </div>
   );
}

export default InstructionsView;
