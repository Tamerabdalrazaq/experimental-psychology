import React, { useRef, useState } from "react";
import { config } from "../exp_config/experiment_config";

export const SubjectContext = React.createContext();

const types = config.GAME_TYPES;

export function SubjectContextProvider({ children }) {
   const trainingSet = useRef([]);
   const set_1 = useRef([]);
   const set_2 = useRef([]);
   const screened_out = useRef(false);

   return (
      <SubjectContext.Provider
         value={{
            [types.training]: trainingSet,
            [types.set_1]: set_1,
            [types.set_2]: set_2,
            screened_out,
         }}
      >
         {children}
      </SubjectContext.Provider>
   );
}
