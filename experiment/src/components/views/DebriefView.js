import React, { useContext, useEffect, useState } from "react";
import InstructionsView from "./InstructionsView";
import { ClimbingBoxLoader } from "react-spinners";
import { SubjectContext } from "../../context/SubjectContext";
import { config } from "../../exp_config/experiment_config";
import handleSubmit from "../../db/db_submit";
import { BiCommentError } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";

const { training, set_1, set_2 } = config.GAME_TYPES;

function DebriefView({ instructions, title }) {
   const subjectContext = useContext(SubjectContext);
   const [loading, setLoading] = useState(true);
   const [rejected, setRejected] = useState(false);

   function reject(err) {
      setRejected(true);
      setLoading(false);
      alert(err);
   }
   function accept() {
      setRejected(false);
      setLoading(false);
   }

   async function submitData() {
      setLoading(true);
      handleSubmit(subjectContext, accept, reject);
      // setTimeout(() => setLoading(false), 3000);
   }

   useEffect(() => {
      submitData();
   }, []);

   if (loading)
      return (
         <div className="finishedset_container">
            <ClimbingBoxLoader />
            <h3>Sending data, please hold</h3>
         </div>
      );
   if (rejected)
      return (
         <div className="finishedset_container">
            <div>
               <BiCommentError size={50} color="red" />
               <h3>An Error Has Occured</h3>
            </div>
            <div>
               <h5>
                  Please make sure you're connected to the internet, then press
                  on Retry.
               </h5>
               <h6>
                  For instructions, contact the researcher in charge - Ayan
                  Oudetallah
               </h6>
            </div>
            <button onClick={() => submitData()}>
               Retry <VscDebugRestart />
            </button>
         </div>
      );
   return <InstructionsView title={title} instructions={instructions} />;
}

export default DebriefView;
