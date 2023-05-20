import React, { useRef, useState } from "react";
import { config } from "../exp_config/experiment_config";

export const SubjectContext = React.createContext();

const types = config.GAME_TYPES;

export function SubjectContextProvider({ children }) {
   const learningSet = useRef([]);
   const trainingSet = useRef([]);
   const set_1 = useRef([]);
   const set_2 = useRef([]);
   const screened_out = useRef(false);
   const wallet = useRef({
      subject: 0,
      computer: 0,
   });
   const dictator_input = useRef();
   const general_questions = useRef({});

   function resetWallet() {
      wallet.current = { subject: 0, computer: 0 };
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
         }}
      >
         {children}
      </SubjectContext.Provider>
   );
}
