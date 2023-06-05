import { BsSignStop } from "react-icons/bs";

function MobileWarning({ title, message }) {
   return (
      <div className="mobile-warning">
         <BsSignStop color="red" size={140} />
         <h1>{title}</h1>
         <h3>{message}</h3>
      </div>
   );
}

export default MobileWarning;
