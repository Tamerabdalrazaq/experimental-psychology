// Converts ms to format sec:ms
export function msToSeconds(ms) {
   const seconds = Math.floor(ms / 1000);
   let ms_remainder = Math.floor((ms - seconds * 1000) / 10);
   if (ms_remainder < 100) ms_remainder += ms_remainder < 10 ? `0` : ``;
   if (seconds < 0) return `0:00`;
   return `${seconds}:${ms_remainder}`;
}
