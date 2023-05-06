import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineDisconnect } from "react-icons/ai";
import { config } from "../../exp_config/experiment_config";

const {
   inputs: { COOPORATE_KEY, SOLO_KEY },
} = config.GAME_CONFIG;

const choise_meanings = {
   [SOLO_KEY]: ["Solo-Played", <AiOutlineDisconnect size={80} />],
   [COOPORATE_KEY]: ["Cooporated", <FaRegHandshake size={80} />],
};

function ChoiseIcon({ choise }) {
   return (
      <div
         className="choise-result-slider"
         style={{
            color: choise === SOLO_KEY ? "#A30000" : "green",
         }}
      >
         {choise_meanings[choise][1]}
         <h2>{choise_meanings[choise][0]}</h2>
      </div>
   );
}

export default ChoiseIcon;
