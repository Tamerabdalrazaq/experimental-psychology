import AttentionCheck from "../components/UI/AttentionCheck";
import InstructionsView from "../components/UI/InstructionsView";
import { UI_DATA } from "./experiment_config";

const { FIRST_ATTENTION, INSTRUCTIONS } = UI_DATA;

export const experiment_flow = [
   <AttentionCheck
      title={FIRST_ATTENTION.title}
      instructions={FIRST_ATTENTION.instructions}
      attention_questions={FIRST_ATTENTION.attention_questions}
   />,
   ...INSTRUCTIONS.map((inst, i) => (
      <InstructionsView
         title={inst.title}
         instructions={inst.instructions}
         key={i}
      />
   )),
];
