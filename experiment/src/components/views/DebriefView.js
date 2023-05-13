import React, { useContext, useEffect, useState } from "react";
import InstructionsView from "./InstructionsView";
import { ClimbingBoxLoader } from "react-spinners";
import { SubjectContext } from "../../context/SubjectContext";
import { config } from "../../exp_config/experiment_config";
import handleSubmit from "../../db/db_submit";

const { training, set_1, set_2 } = config.GAME_TYPES;

function DebriefView({ instructions, title }) {
   const subjectContext = useContext(SubjectContext);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function f() {
         handleSubmit(subjectContext);
         setTimeout(() => setLoading(false), 3000);
      }
      f();
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
