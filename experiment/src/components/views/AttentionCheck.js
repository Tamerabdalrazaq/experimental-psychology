import React, { useState, forwardRef, useImperativeHandle } from "react";
import InstructionsView from "./InstructionsView";

const AttentionCheck = forwardRef(
   ({ title, instructions, attention_questions, setChildReady }, ref) => {
      const [checkedNum, setCheckedNum] = useState(0);
      const [attentive, setAttentive] = useState(true);

      useImperativeHandle(ref, () => ({
         allow_next() {
            const allowed = checkedNum === attention_questions.length - 1;
            if (allowed) return true;
            setAttentive(false);
            return false;
         },
      }));

      function handleCheckClick(e, question) {
         setCheckedNum(
            (prev) => prev + (e.target.checked === question.checked ? 1 : -1)
         );
      }

      return (
         <div className="attention-check">
            <InstructionsView title={title} instructions={instructions} />
            <div className="checklist">
               {attention_questions.map((question, index) => (
                  <span key={index}>
                     <input
                        type={"checkbox"}
                        id={`checkbox-${index}`}
                        key={index}
                        onClick={(e) => handleCheckClick(e, question)}
                     />
                     <label
                        htmlFor={`checkbox-${index}`}
                        style={{ color: `${!attentive && "red"}` }}
                     >
                        {question.label}
                     </label>
                  </span>
               ))}
            </div>
         </div>
      );
   }
);

export default AttentionCheck;
