import { BsSignStop } from "react-icons/bs";

function MobileWarning({ type }) {
   return (
      <div className="mobile-warning">
         <BsSignStop color="red" size={140} />
         {type === "DEVICE" && (
            <>
               <h1>
                  {`Unfortunately, you can only access this experiment from a wide screen.`}
               </h1>
               <h3>
                  * If you're on Ipad, please switch to portrait mode and
                  refresh the page
               </h3>
            </>
         )}
         {type === "SUBJECT_EXPOSED" && (
            <>
               <h1>{`Unfortunately, you can't take this experiment twice.`}</h1>
               <h3>
                  If you think this is a mistake, please contact the reseracher
                  in charge - Ayan Oudetallah.
               </h3>
            </>
         )}
      </div>
   );
}

export default MobileWarning;
