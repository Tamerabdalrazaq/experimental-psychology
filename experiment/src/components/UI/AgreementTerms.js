import React from "react";

function AgreementTerms({ title, instructions }) {
   return (
      <div className="agreement-view">
         {title && <h1>{title}</h1>}
         <ul>
            {instructions.map((instruction, i) => {
               return typeof instruction === "string" ? (
                  <li>
                     <p key={i}>{instruction}</p>
                  </li>
               ) : (
                  <li>
                     <span key={i}>{instruction}</span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default AgreementTerms;
