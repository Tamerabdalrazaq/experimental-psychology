import { useEffect, useState } from "react";
import { SubjectContextProvider } from "../context/SubjectContext";
import "../css/App.scss";
import Experiment from "./Experiment";
import MobileWarning from "./UI/MobileWarning";

function App() {
   const [showMobileWarning, setShowMobileWarning] = useState(false);
   const subject_exposed_to_training = window.localStorage.getItem(
      "subject_exposed_to_training"
   );
   const subject_admin = window.localStorage.getItem("subject_admin");

   useEffect(() => {
      if (window.innerWidth <= 800) setShowMobileWarning(true);
   }, []);

   if (!subject_admin)
      return (
         <MobileWarning
            title={"Participating in the study is currently not allowed."}
         />
      );

   if (showMobileWarning)
      return (
         <MobileWarning
            title={
               "Unfortunately, you can only access this experiment from a wide screen."
            }
            message={`* If you're on Ipad, please switch to portrait mode and
            refresh the page`}
         />
      );
   if (subject_exposed_to_training && !subject_admin)
      return (
         <MobileWarning
            title={"Unfortunately, you can't take this experiment twice."}
            message={`If you think this is a mistake, please contact the reseracher
            in charge - Ayan Oudetallah.`}
         />
      );
   return (
      <SubjectContextProvider>
         <div className="App">
            <Experiment />
         </div>
      </SubjectContextProvider>
   );
}

export default App;
