import React, { useContext, useEffect, useState } from "react";
import InstructionsView from "./InstructionsView";
import { ClimbingBoxLoader } from "react-spinners";
import { SubjectContext } from "../../context/SubjectContext";
import { config } from "../../exp_config/experiment_config";

const { training, set_1, set_2 } = config.GAME_TYPES;

function DebriefView({ instructions, title }) {
   const subjectContext = useContext(SubjectContext);
   const {
      [training]: _training,
      [set_1]: _set_1,
      [set_2]: _set_2,
      screened_out,
      dictator_input,
      general_questions,
   } = subjectContext;
   const [loading, setLoading] = useState(true);
   console.log({
      _training,
      _set_1,
      _set_2,
      screened_out,
      dictator_input,
      general_questions,
   });

   useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
   }, []);
   if (!loading)
      return <InstructionsView title={title} instructions={instructions} />;

   return (
      <div className="finishedset_container">
         <ClimbingBoxLoader />
         <h3>Sending data, please hold</h3>
      </div>
   );
}

export default DebriefView;
