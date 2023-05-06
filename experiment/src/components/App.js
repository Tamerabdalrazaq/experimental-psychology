import { useEffect, useState } from "react";
import { SubjectContextProvider } from "../context/SubjectContext";
import "../css/App.scss";
import Experiment from "./Experiment";
import MobileWarning from "./UI/MobileWarning";

function App() {
   const [showMobileWarning, setShowMobileWarning] = useState(false);

   useEffect(() => {
      if (window.innerWidth <= 800) setShowMobileWarning(true);
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
