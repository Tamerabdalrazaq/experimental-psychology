import React, {
   forwardRef,
   useContext,
   useImperativeHandle,
   useState,
} from "react";
import InstructionsView from "./InstructionsView";
import { UI_DATA, config } from "../../exp_config/experiment_config";
import { SubjectContext } from "../../context/SubjectContext";

const GeneralQuestionsView = forwardRef(({}, ref) => {
   const subjectContext = useContext(SubjectContext);
   const [q_1, setQ_1] = useState(false);
   const [q_2, setQ_2] = useState();
   const [q_3, setQ_3] = useState();

   useImperativeHandle(ref, () => ({
      allow_next() {
         subjectContext.general_questions.current = {
            q_1,
            q_2,
            q_3,
         };
         return true;
      },
   }));

   return (
      <div className="general-questions">
         <InstructionsView
            title={UI_DATA.GENERAL_QUESTIONS.title}
            instructions={UI_DATA.GENERAL_QUESTIONS.instructions}
         />
         <div className="questions">
            <span>
               <label for={"q_1"}>{UI_DATA.GENERAL_QUESTIONS.q_1}</label>
               <select
                  id="q_1"
                  value={q_1}
                  onChange={(e) => setQ_1(e.target.value)}
               >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
               </select>
            </span>
            <label for={"q_2"}>{UI_DATA.GENERAL_QUESTIONS.q_2}</label>
            <textarea
               className="form-control"
               placeholder="Please explain..."
               id="q_2"
               value={q_2}
               onChange={(e) => setQ_2(e.target.value)}
            ></textarea>
            <label for={"q_3"}>{UI_DATA.GENERAL_QUESTIONS.q_3}</label>
            <textarea
               className="form-control"
               placeholder="Please explain..."
               id="q_3"
               value={q_3}
               onChange={(e) => setQ_3(e.target.value)}
            ></textarea>
         </div>
      </div>
   );
});

export default GeneralQuestionsView;
