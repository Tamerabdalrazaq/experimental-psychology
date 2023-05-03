import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineDisconnect } from "react-icons/ai";

const choise_meanings = {
   D: ["Solo-Played", <AiOutlineDisconnect size={80} />],
   K: ["Cooporated", <FaRegHandshake size={80} />],
};

function ChoiseIcon({ choise }) {
   return (
      <div
         className="choise-result-slider"
         style={{
            color: choise === "D" ? "#A30000" : "green",
         }}
      >
         {choise_meanings[choise][1]}
         <h2>{choise_meanings[choise][0]}</h2>
      </div>
   );
}

export default ChoiseIcon;
