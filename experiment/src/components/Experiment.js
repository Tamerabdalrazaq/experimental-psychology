import React, { useContext, useEffect, useRef, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/App.scss";
import useExperimentFlow from "../exp_config/useExperimentFlow";
import { UI_DATA, GAME_TYPES } from "../exp_config/experiment_config";
import { SubjectContext } from "../context/SubjectContext";

function Experiment() {
   const [progress, setProgress] = useState(0);
   const childRef = useRef(null);
   const experimentFlow = useExperimentFlow();
   const { lang, subject_type } = useContext(SubjectContext);

   const current_view = experimentFlow[progress];
   const next_button = current_view.props.next_button;
   const prev_button = current_view.props.prev_button;

   useEffect(() => {
      if (current_view.props.type === GAME_TYPES.training) {
         window.localStorage.setItem("subject_exposed_to_training", true);
      }
   }, [current_view.props.type]);
   const button_click = (dir) => {
      if (
         !childRef.current ||
         !childRef.current.allow_next ||
         childRef.current.allow_next()
      ) {
         setProgress((curr) => {
            return Math.min(Math.max(curr + dir, 0), experimentFlow.length - 1);
         });
      }
   };

   const el = React.createElement(
      current_view.type,
      {
         ...current_view.props,
         ref: childRef,
         move: button_click,
      },
      current_view.children
   );

   const showButtons = () => progress < experimentFlow.length - 1;

   return (
      <div
         className="exp_container"
         style={{ direction: lang === "AR" ? "rtl" : "ltr" }}
      >
         <h6>DEV MODE - Subject Type: {subject_type?.current}</h6>

         <div className="top">{el}</div>
         <div className="bottom">
            {showButtons() && (
               <div className="buttons">
                  <button
                     disabled={prev_button === "disabled"}
                     onClick={() => button_click(-1)}
                  >
                     {UI_DATA.BUTTONS.PREV[lang]}
                  </button>
                  <button onClick={() => button_click(1)}>
                     {next_button || UI_DATA.BUTTONS.NEXT[lang]}
                  </button>
               </div>
            )}
            <ProgressBar
               animated={showButtons()}
               now={(progress / (experimentFlow.length - 1)) * 100}
               label={""}
            />
         </div>
      </div>
   );
}

export default Experiment;
