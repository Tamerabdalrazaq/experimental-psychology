import React, { useState } from "react";
import { config } from "../exp_config/experiment_config";

const { GAME_TYPES } = config;
function useTour(type) {
   const [tourOn, setTourOn] = useState(GAME_TYPES.learning === type);
   function closeTour() {
      setTourOn(false);
   }
   return { tourOn, closeTour };
}

export default useTour;
