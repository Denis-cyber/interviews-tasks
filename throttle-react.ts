// CONDITION

// Should write throttle hook for optimization button clicks

// import { useState, useRef, useCallback } from "react";

// export default function App() {
//   const [day, setDay] = useState<number>(19122023);

//   const handleClick = useThrottle(() => setDay(Date.now()), 4000);
//   return (
//     <>
//       <div>{day}</div>
//       <button onClick={handleClick}>Set day</button>
//     </>
//   );
// }

// function useThrottle<T>(callback: (...args: T[]) => void, delay: number) {
//   const refThrottle = useRef(false);

//   return useCallback(
//     (...args: T[]) => {
//       if (!refThrottle.current) {
//         refThrottle.current = true;
//         callback(...args);

//         setTimeout(() => (refThrottle.current = false), delay);
//       }
//     },
//     [callback, delay]
//   );
// }
