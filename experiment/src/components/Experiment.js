import React, { useRef, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/App.scss";
import { experiment_flow } from "../exp_config/experiment_flow";

function Experiment() {
   const [progress, setProgress] = useState(0);
   const childRef = useRef(null);

   const next_button = experiment_flow[progress].props.next_button;
   const prev_button = experiment_flow[progress].props.prev_button;

   const el = React.createElement(
      experiment_flow[progress].type,
      {
         ...experiment_flow[progress].props,
         ref: childRef,
      },
      experiment_flow[progress].children
   );

   const button_click = (dir) => {
      if (
         !childRef.current ||
         !childRef.current.allow_next ||
         childRef.current.allow_next()
      ) {
         setProgress((curr) => {
            return Math.min(
               Math.max(curr + dir, 0),
               experiment_flow.length - 1
            );
         });
      }
   };

   return (
      <div className="exp_container">
         <div className="top">{el}</div>
         <div className="bottom">
            <div className="buttons">
               <button onClick={() => button_click(-1)}>previous</button>
               <button onClick={() => button_click(1)}>
                  {next_button || "next"}
               </button>
            </div>
            <ProgressBar
               animated
               now={(progress / (experiment_flow.length - 1)) * 100}
               label={""}
            />
         </div>
      </div>
   );
}

export default Experiment;
