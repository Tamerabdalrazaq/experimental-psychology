import React, {
   forwardRef,
   useContext,
   useImperativeHandle,
   useState,
} from "react";
import Form from "react-bootstrap/Form";
import InstructionsView from "./InstructionsView";
import { config } from "../../exp_config/experiment_config";
import { SubjectContext } from "../../context/SubjectContext";

const DictatorGameView = forwardRef(({ title, instructions }, ref) => {
   const subjectContext = useContext(SubjectContext);
   const [input, setInput] = useState(
      Math.floor(config.DICTATORS_GAME_MONEY / 2)
   );

   useImperativeHandle(ref, () => ({
      allow_next() {
         const allowed =
            !isNaN(input) &&
            input !== "" &&
            input >= 0 &&
            input <= config.DICTATORS_GAME_MONEY;
         if (!allowed) alert("Invalid input");
         subjectContext.dictator_input.current = input;
         return allowed;
      },
   }));

   return (
      <div className="dictator-game-container">
         <InstructionsView title={title} instructions={instructions} />
         <div className="range-input">
            <Form.Label>
               Give {config.GAME_CONFIG.opponent_name}{" "}
               <input
                  type="number"
                  min={0}
                  max={config.DICTATORS_GAME_MONEY}
                  onInput={(e) =>
                     0 <= e.target.value &&
                     e.target.value <= 100 &&
                     setInput(e.target.value)
                  }
                  className="text-input"
                  value={input}
               />{" "}
               ₪
            </Form.Label>
            <Form.Range
               style={{ width: "50%" }}
               min={0}
               max={config.DICTATORS_GAME_MONEY}
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
         </div>
      </div>
   );
});

export default DictatorGameView;
