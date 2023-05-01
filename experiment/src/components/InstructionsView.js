import React from "react";

function InstructionsView({ title, instructions }) {
   return (
      <div>
         {title && <h1>{title}</h1>}
         {instructions.map((instruction) => (
            <>
               <p>{instruction}</p>
               {/* <br /> */}
            </>
         ))}
      </div>
   );
}

export default InstructionsView;
