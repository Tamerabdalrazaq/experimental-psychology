import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/App.scss";
import InstructionsView from "./InstructionsView";

function Experiment() {
   const [progress, setProgress] = useState(0);
   const arr = [
      <InstructionsView
         title={"instructions 1"}
         instructions={[
            "Labore proident amet ullamco reprehenderit eu dolore.",
            "Nulla et labore id eiusmod sit mollit ad ad aliquip deserunt officia ullamco culpa. Ea ut do velit aute aliquip et. Mollit deserunt irure in dolor. Deserunt qui voluptate culpa laboris ullamco adipisicing qui nulla veniam eu.",
         ]}
      />,
      <InstructionsView
         title={"instructions 2"}
         instructions={[
            "Labore proident amet ullamco reprehenderit eu dolore.",
         ]}
      />,
   ];

   const button_click = (dir) => {
      setProgress((curr) => {
         return Math.min(Math.max(curr + dir, 0), arr.length - 1);
      });
   };

   return (
      <div className="exp_container">
         <div className="top">{arr[progress]}</div>
         <div className="bottom">
            <div className="buttons">
               <button onClick={() => button_click(-1)}>previous</button>
               <button onClick={() => button_click(1)}>next</button>
            </div>
            <ProgressBar
               animated
               now={Math.ceil(progress / arr.length) * 100}
               label={""}
            />
         </div>
      </div>
   );
}

export default Experiment;
