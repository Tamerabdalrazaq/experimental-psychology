import React, { forwardRef, useContext, useEffect } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import AttentionCheck from "./AttentionCheck";
import { bold_underlineText } from "../../helpers/semantics";
import { getArrByLang, getValByLang } from "../../helpers/helpers";

const ExposeOpponentView = forwardRef(({ timing }, ref) => {
   const { getOpName, setNameExposed, lang } = useContext(SubjectContext);

   useEffect(() => {
      setNameExposed(true);
   }, []);

   const SECOND_ATTENTION = {
      id: "attention_2",
      title: { EN: "Set 2\\3 Completed!", AR: `الجولة ${"2\\3"} اكتملت` },
      instructions: [
         {
            EN: (
               <p>
                  You have completed the second set with{" "}
                  {bold_underlineText(getOpName())}, in the next part you will
                  continue playing another set of rounds with her.
               </p>
            ),
            AR: (
               <p>
                  {"اكتملت الجولة الثانية مع"} {bold_underlineText(getOpName())}{" "}
                  {"وستلعبين جولة اخرى معها"}
               </p>
            ),
         },
      ],
      attention_title: {
         EN: "Which of the following is a color? (Check all correct answers)",
         AR: "أي من التالي لون؟",
      },
      attention_questions: [
         {
            EN: {
               label: "Red",
               checked: true,
            },
            AR: {
               label: "أحمر",
               checked: true,
            },
         },
         {
            EN: { label: "Table Tennis", checked: false },
            AR: { label: " طاولة تنس", checked: false },
         },
         {
            EN: { label: "Brown", checked: true },
            AR: { label: "بنّي", checked: true },
         },
      ],
   };

   return (
      <AttentionCheck
         ref={ref}
         id={SECOND_ATTENTION.id}
         title={getValByLang(SECOND_ATTENTION.title, lang)}
         instructions={getArrByLang(SECOND_ATTENTION.instructions, lang)}
         attention_title={getValByLang(SECOND_ATTENTION.attention_title, lang)}
         attention_questions={getArrByLang(
            SECOND_ATTENTION.attention_questions,
            lang
         )}
      />
   );
});

export default ExposeOpponentView;
