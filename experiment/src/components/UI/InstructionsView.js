import React from "react";

function InstructionsView({ title, instructions }) {
   return (
      <div className="instructions-view">
         {title && <h1>{title}</h1>}
         {instructions.map((instruction) => (
            <p>{instruction}</p>
         ))}
      </div>
   );
}

export default InstructionsView;
