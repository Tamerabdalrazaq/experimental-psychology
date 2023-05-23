import React from "react";

function RewardsTable() {
   return (
      <>
         <table className="rewards_table">
            <thead>
               <tr>
                  <th className="tg-0lax">
                     <span style={{ fontWeight: "bold", color: "#036400" }}>
                        Player1
                     </span>
                     \<br />
                     <span style={{ fontWeight: "bold", color: "#00009B" }}>
                        Player2
                     </span>
                  </th>
                  <th className="tg-lfzh">Cooporate</th>
                  <th className="tg-lfzh">Solo-Move</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className="tg-8l6z">Cooporate</td>
                  <td className="tg-0lax">
                     <span style={{ fontWeight: "bold", color: "#036400" }}>
                        30pts
                     </span>{" "}
                     \{" "}
                     <span style={{ fontWeight: "bold", color: "#00009B" }}>
                        30pts
                     </span>
                  </td>
                  <td className="tg-0lax">
                     <span style={{ fontWeight: "bold", color: "#036400" }}>
                        40pts
                     </span>{" "}
                     \{" "}
                     <span style={{ fontWeight: "bold", color: "#00009B" }}>
                        0pts
                     </span>
                  </td>
               </tr>
               <tr>
                  <td className="tg-8l6z">Solo-Move</td>
                  <td className="tg-0lax">
                     <span style={{ fontWeight: "bold", color: "#036400" }}>
                        0pts
                     </span>{" "}
                     \{" "}
                     <span style={{ fontWeight: "bold", color: "#00009B" }}>
                        40pts
                     </span>
                  </td>
                  <td className="tg-0lax">
                     <span style={{ fontWeight: "bold", color: "#036400" }}>
                        10pts
                     </span>
                     <span style={{ color: "#00009B" }}> </span>\{" "}
                     <span style={{ fontWeight: "bold", color: "#00009B" }}>
                        10ps
                     </span>
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   );
}

export default RewardsTable;
