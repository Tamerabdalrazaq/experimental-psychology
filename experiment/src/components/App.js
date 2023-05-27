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

   if (showMobileWarning) return <MobileWarning type={"DEVICE"} />;
   if (subject_exposed_to_training && !subject_admin)
      return <MobileWarning type={"SUBJECT_EXPOSED"} />;
   return (
      <SubjectContextProvider>
         <div className="App">
            <Experiment />
         </div>
      </SubjectContextProvider>
   );
}

export default App;
