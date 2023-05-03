import React, { useRef, useState } from "react";

export const SubjectContext = React.createContext();

export function SubjectContextProvider({ children }) {
   const trainingSet = useRef([]);
   const set_1 = useRef([]);
   const set_2 = useRef([]);
   console.log("Context render");
   return (
      <SubjectContext.Provider
         value={{
            trainingSet,
            set_1,
            set_2,
         }}
      >
         {children}
      </SubjectContext.Provider>
   );
}
