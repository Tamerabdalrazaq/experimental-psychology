import AttentionCheck from "../components/views/AttentionCheck";
import InstructionsView from "../components/views/InstructionsView";
import GameView from "../components/views/GameView";
import { UI_DATA, config } from "./experiment_config";

const { GAME_CONFIG } = config;
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
   <GameView opponent_name={GAME_CONFIG.opponent_name} />,
];
