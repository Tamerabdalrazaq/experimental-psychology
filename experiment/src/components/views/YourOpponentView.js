import React, { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import InstructionsView from "./InstructionsView";
import { bold_underlineText } from "../../helpers/semantics";
import { getArrByLang, getValByLang } from "../../helpers/helpers";

function YourOpponentView() {
   const context = useContext(SubjectContext);
   const { getOpName, lang } = context;
   const instructions = {
      title: { EN: "Your Opponent", AR: "يا دار ميّة بالعلياء فالسند" },
      instructions: [
         {
            EN: (
               <p>
                  You've completed the first round with{" "}
                  {bold_underlineText(getOpName())}. {getOpName()} is 24, a
                  straight woman with brown eyes, who is weighing roughly 64 kg.
                  She has 2 siblings, one older and one younger.
               </p>
            ),
            AR: (
               <p>
                  أقوت وطال عليها سالف الأبد
                  {bold_underlineText(getOpName())}
               </p>
            ),
         },
      ],
   };

   return (
      <InstructionsView
         title={getValByLang(instructions.title, lang)}
         instructions={getArrByLang(instructions.instructions, lang)}
      />
   );
}

export default YourOpponentView;
