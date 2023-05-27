import React, { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import InstructionsView from "./InstructionsView";
import { bold_underlineText } from "../../helpers/semantics";
import { getArrByLang, getValByLang } from "../../helpers/helpers";

function YourOpponentView() {
   const context = useContext(SubjectContext);
   const { getOpName, lang } = context;
   const instructions = {
      title: { EN: "Your Opponent", AR: "من الخصم؟" },
      instructions: [
         {
            EN: (
               <p>
                  {bold_underlineText(getValByLang(getOpName()))} is 24, a woman
                  with brown eyes, who is weighing roughly 64 kg. She has 2
                  siblings, one older and one younger.
               </p>
            ),
            AR: (
               <p>
                  {bold_underlineText(getValByLang(getOpName()))}{" "}
                  {` تبلغ من العمر 24 عامًا، لها عيون بنية، وتزن حوالي 64 كيلوغرامًا. لديها شقيقين، أحدهما أكبر سنًا والآخر أصغر.`}
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
