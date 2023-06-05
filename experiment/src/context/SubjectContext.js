import React, { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import { config } from "../exp_config/experiment_config";
import { getDate } from "../helpers/helpers";

export const SubjectContext = React.createContext();

const types = config.GAME_TYPES;
const op_name = config.GAME_CONFIG.opponent_name;
const { EARLY_IN, EARLY_OUT, LATE_IN, LATE_OUT } = config.subject_types;

export function SubjectContextProvider({ children }) {
   const subject_type = useRef();
   const learningSet = useRef([]);
   const trainingSet = useRef([]);
   const set_1 = useRef([]);
   const set_2 = useRef([]);
   const screened_out = useRef(false);
   const wallet = useRef({
      subject: 0,
      computer: 0,
   });
   const subject_id = useRef(uniqid());
   const curr_date = useRef(getDate());
   const [nameExposed, setNameExposed] = useState(false);
   const dictator_input = useRef();
   const general_questions = useRef({});
   const [lang, setLang] = useState("AR");

   useEffect(() => {
      const rand = Math.random();
      if (rand < 0.25) subject_type.current = EARLY_IN;
      else if (rand < 0.5) subject_type.current = EARLY_OUT;
      else if (rand < 0.75) subject_type.current = LATE_IN;
      else if (rand <= 1) subject_type.current = LATE_OUT;
      console.log("[DEV - V3.1] Subject Type: " + subject_type.current);
   }, []);

   function resetWallet() {
      wallet.current = { subject: 0, computer: 0 };
   }

   function getOpName(first = false) {
      if (first) return getFirstName(op_name.IN[lang]);
      if (subject_type.current === EARLY_IN) return op_name.IN[lang];
      else if (subject_type.current === EARLY_OUT) return op_name.OUT[lang];
      else if (subject_type.current === LATE_IN)
         return nameExposed ? op_name.IN[lang] : getFirstName(op_name.IN[lang]);
      else if (subject_type.current === LATE_OUT)
         return nameExposed
            ? op_name.OUT[lang]
            : getFirstName(op_name.OUT[lang]);
   }

   function getFirstName(name) {
      return name.split(" ")[0];
   }

   return (
      <SubjectContext.Provider
         value={{
            [types.learning]: learningSet,
            [types.training]: trainingSet,
            [types.set_1]: set_1,
            [types.set_2]: set_2,
            screened_out,
            wallet,
            resetWallet,
            dictator_input,
            general_questions,
            getOpName,
            setNameExposed,
            lang,
            setLang,
            subject_type,
            curr_date,
            subject_id,
         }}
      >
         {children}
      </SubjectContext.Provider>
   );
}
