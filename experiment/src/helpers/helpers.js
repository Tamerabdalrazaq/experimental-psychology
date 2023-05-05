import { config } from "../exp_config/experiment_config";

const {
   ALGORITHM: { BETRAYAL, FOREGIVENESS },
} = config;

// Converts ms to format sec:ms
export function msToSeconds(ms) {
   const seconds = Math.floor(ms / 1000);
   let ms_remainder = Math.floor((ms - seconds * 1000) / 10);
   if (ms_remainder < 100) ms_remainder += ms_remainder < 10 ? `0` : ``;
   if (seconds < 0) return `0:00`;
   return `${seconds}:${ms_remainder}`;
}

// Decides whether to cooporate or not base on the last round with BETRAYAL%, FOREGIVENESS%
export function getComputerDecision(setHistory) {
   const subject_cooporated = setHistory[setHistory.length - 2];
   const rand = Math.random();
   if (subject_cooporated) return rand >= BETRAYAL / 100;
   else return rand <= FOREGIVENESS / 100;
}

// returns a random integer in range [a,b)
export function randRange(a, b) {
   let rand = Math.random();
   return a + Math.floor(rand * (b - a));
}
