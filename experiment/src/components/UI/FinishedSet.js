import { AiOutlineFileDone } from "react-icons/ai";

function FinishedSet() {
   return (
      <div className={`finishedset_container`}>
         <AiOutlineFileDone className={"icon"} />
         <div>
            <h2>You&apos;ve Completed this set</h2>
            <h2>Press next to procede</h2>
         </div>
      </div>
   );
}

export default FinishedSet;
