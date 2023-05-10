import React, {
   useState,
   forwardRef,
   useImperativeHandle,
   useContext,
} from "react";
import InstructionsView from "./InstructionsView";
import { SubjectContext } from "../../context/SubjectContext";

const AttentionCheck = forwardRef(
   ({ title, instructions, attention_questions, setChildReady }, ref) => {
      const [checkedNum, setCheckedNum] = useState(0);
      const subjectContext = useContext(SubjectContext);

      useImperativeHandle(ref, () => ({
         allow_next() {
            const allowed = checkedNum === attention_questions.length - 1;
            if (!allowed) subjectContext.screened_out.current = true;
            return true;
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
                     <label htmlFor={`checkbox-${index}`}>
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
