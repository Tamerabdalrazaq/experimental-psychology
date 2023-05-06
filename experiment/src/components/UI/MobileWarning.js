import { BsSignStop } from "react-icons/bs";

function MobileWarning() {
   return (
      <div className="mobile-warning">
         <BsSignStop color="red" size={140} />
         <h1>
            {`Unfortunately, you can only access this experiment from a wide screen.`}
         </h1>
         <h3>
            * If you're on Ipad, please switch to portrait mode and refresh the
            page
         </h3>
      </div>
   );
}

export default MobileWarning;
