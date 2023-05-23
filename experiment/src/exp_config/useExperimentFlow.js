import AttentionCheck from "../components/views/AttentionCheck";
import InstructionsView from "../components/views/InstructionsView";
import GameView from "../components/views/GameView";
import { UI_DATA, config } from "./experiment_config";
import DictatorGameView from "../components/views/DictatorGameView";
import GeneralQuestionsView from "../components/views/GeneralQuestionsView";
import DebriefView from "../components/views/DebriefView";
import YourOpponentView from "../components/views/YourOpponentView";
import ExposeOpponentView from "../components/views/ExposeOpponentView";
import { SubjectContext } from "../context/SubjectContext";
import { getArrByLang, getValByLang } from "../helpers/helpers";
import { useContext, useMemo } from "react";
import SelectLanguageView from "../components/views/SelectLanguageView";

const { GAME_CONFIG, GAME_TYPES } = config;
const {
   FIRST_ATTENTION,
   INSTRUCTIONS_ARRAY,
   POST_LEARNING_INSTRUCTIONS,
   SECOND_ATTENTION,
   DICTATOR_GAME_INSTRUCTIONS,
   DEBRIEF,
   FIRST_SET_FINISHED,
   PRE_TRAINING_INSTRUCTIONS,
   OPPONENT_DESCRIPTION_INSTRUCTIONS,
} = UI_DATA;

export default function useExperimentFlow() {
   const subjectContext = useContext(SubjectContext);
   const lang = subjectContext.lang;

   const getName = () => ({ EN: "You", AR: "أنت" }[lang]);

   const experiment_flow = useMemo(
      () => [
         <SelectLanguageView />,
         <AttentionCheck
            title={getValByLang(FIRST_ATTENTION.title, lang)}
            instructions={getArrByLang(FIRST_ATTENTION.instructions, lang)}
            attention_questions={getArrByLang(
               FIRST_ATTENTION.attention_questions,
               lang
            )}
         />,
         ...INSTRUCTIONS_ARRAY.map((inst, i) => (
            <InstructionsView
               title={getValByLang(inst.title, lang)}
               instructions={getArrByLang(inst.instructions, lang)}
               key={i}
            />
         )),
         <GameView
            opponent_name={{ EN: "Opponent", AR: "الغريم" }[lang]}
            your_name={getName()}
            type={GAME_TYPES.learning}
         />,
         <InstructionsView
            title={getValByLang(PRE_TRAINING_INSTRUCTIONS.title, lang)}
            instructions={getArrByLang(
               PRE_TRAINING_INSTRUCTIONS.instructions,
               lang
            )}
         />,
         <GameView
            type={GAME_TYPES.training}
            your_name={getName()}
            prev_button={"disabled"}
         />,
         <YourOpponentView prev_button={"disabled"} />,
         <GameView
            type={GAME_TYPES.set_1}
            your_name={getName()}
            prev_button={"disabled"}
         />,
         <ExposeOpponentView />,
         <GameView
            type={GAME_TYPES.set_2}
            your_name={getName()}
            prev_button={"disabled"}
         />,
         <DictatorGameView next_button={"Finish"} prev_button={"disabled"} />,
         <GeneralQuestionsView prev_button={"disabled"} />,
         <DebriefView
            title={getValByLang(DEBRIEF.title, lang)}
            instructions={getArrByLang(DEBRIEF.instructions, lang)}
            prev_button={"disabled"}
         />,
      ],
      [lang]
   );
   return experiment_flow;
}
