import { SubjectContextProvider } from "../context/SubjectContext";
import "../css/App.scss";
import Experiment from "./Experiment";

function App() {
   return (
      <SubjectContextProvider>
         <div className="App">
            <Experiment />
         </div>
      </SubjectContextProvider>
   );
}

export default App;
