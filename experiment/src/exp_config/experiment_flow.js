import AttentionCheck from "../components/views/AttentionCheck";
import InstructionsView from "../components/views/InstructionsView";
import GameView from "../components/views/GameView";
import { UI_DATA, config } from "./experiment_config";

const { GAME_CONFIG, GAME_TYPES } = config;
const {
   FIRST_ATTENTION,
   INSTRUCTIONS_ARRAY,
   POST_LEARNING_INSTRUCTIONS,
   SECOND_ATTENTION,
} = UI_DATA;

export const experiment_flow = [
   <AttentionCheck
      title={FIRST_ATTENTION.title}
      instructions={FIRST_ATTENTION.instructions}
      attention_questions={FIRST_ATTENTION.attention_questions}
   />,
   ...INSTRUCTIONS_ARRAY.map((inst, i) => (
      <InstructionsView
         title={inst.title}
         instructions={inst.instructions}
         key={i}
      />
   )),
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.training}
   />,
   <InstructionsView
      title={POST_LEARNING_INSTRUCTIONS.title}
      instructions={POST_LEARNING_INSTRUCTIONS.instructions}
   />,
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.set_1}
   />,
   <AttentionCheck
      title={SECOND_ATTENTION.title}
      instructions={SECOND_ATTENTION.instructions}
      attention_questions={SECOND_ATTENTION.attention_questions}
   />,
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.set_2}
   />,
];
