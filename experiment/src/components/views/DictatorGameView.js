import React, {
   forwardRef,
   useContext,
   useImperativeHandle,
   useState,
} from "react";
import Form from "react-bootstrap/Form";
import InstructionsView from "./InstructionsView";
import { config } from "../../exp_config/experiment_config";
import { SubjectContext } from "../../context/SubjectContext";
import { bold_underlineText } from "../../helpers/semantics";
import { getArrByLang, getValByLang } from "../../helpers/helpers";

const DictatorGameView = forwardRef(({}, ref) => {
   const subjectContext = useContext(SubjectContext);
   const { lang } = subjectContext;

   const DATA = {
      title: { EN: "Dictator Game", AR: "لعبة الدكتاتور" },
      instructions: [
         {
            EN: (
               <p>
                  Before calculating the final score, You are given an{" "}
                  {bold_underlineText("extra 100")} points.
               </p>
            ),
            AR: (
               <p>
                  {"قبل حساب المجموع النهائي، سنقوم بإعطائك"}
                  {bold_underlineText(" 100 نقطة إضافيّة")}
               </p>
            ),
         },
         {
            EN: "You can choose if and how much to split it with Amir. ",
            AR: "يمكنك  ان تختاري كم ستتاشركين مع دانة.",
         },
         {
            EN: (
               <p>
                  Please choose how much to {bold_underlineText("give")}{" "}
                  {subjectContext.getOpName()}, the remainder would be added to
                  your final amount.
               </p>
            ),
            AR: (
               <p>
                  {" اختاري كم تريدين"}
                  {bold_underlineText(" إعطاء " + subjectContext.getOpName())}
                  {"."}
                  القيمة التي ستختارينها ستَضاف للنتيجة النهائية لكما وفقاً لما
                  أخترتِ
               </p>
            ),
         },
      ],
      GIVE: {
         EN: "Give",
         AR: "أعطِ",
      },
   };

   const [input, setInput] = useState(
      Math.floor(config.DICTATORS_GAME_MONEY / 2)
   );

   useImperativeHandle(ref, () => ({
      allow_next() {
         const allowed =
            !isNaN(input) &&
            input !== "" &&
            input >= 0 &&
            input <= config.DICTATORS_GAME_MONEY;
         if (!allowed) alert("Invalid input");
         subjectContext.dictator_input.current = input;
         return allowed;
      },
   }));

   return (
      <div className="dictator-game-container">
         <InstructionsView
            title={getValByLang(DATA.title, lang)}
            instructions={getArrByLang(DATA.instructions, lang)}
         />
         <div className="range-input">
            <Form.Label>
               {DATA.GIVE[lang]}{" "}
               {bold_underlineText(subjectContext.getOpName())}{" "}
               <input
                  type="number"
                  min={0}
                  max={config.DICTATORS_GAME_MONEY}
                  onInput={(e) =>
                     0 <= e.target.value &&
                     e.target.value <= 100 &&
                     setInput(e.target.value)
                  }
                  className="text-input"
                  value={input}
               />
            </Form.Label>
            <Form.Range
               style={{ width: "50%" }}
               min={0}
               max={config.DICTATORS_GAME_MONEY}
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
         </div>
      </div>
   );
});

export default DictatorGameView;
