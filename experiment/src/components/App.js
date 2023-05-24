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
   useEffect(() => {
      if (window.innerWidth <= 800) setShowMobileWarning(true);
      if (subject_exposed_to_training)
         console.error("Subject was exposed before!");
   }, []);

   if (showMobileWarning) return <MobileWarning />;
   return (
      <SubjectContextProvider>
         <div className="App">
            <Experiment />
         </div>
      </SubjectContextProvider>
   );
}

export default App;
