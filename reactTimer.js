// CONDITION
// should write a timer on react with using useState and useEffect

// export default function App() {
//

//   return (
//     <div>
//       <h1>{seconds}</h1>

//       <button onClick={() => {}}>Start</button>
//       <button onClick={() => {}}>Stop</button>
//     </div>
//   );
// }

// SOLUTION
// import { useEffect, useState } from "react";

// export default function App() {
//   const [isTimerRun, setIsTumerRun] = useState(false);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     if (!isTimerRun) {
//       return;
//     }

//     let timerId = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [isTimerRun]);

//   return (
//     <div>
//       <h1>{seconds}</h1>

//       <button onClick={() => setIsTumerRun(true)}>Start</button>
//       <button onClick={() => setIsTumerRun(false)}>Stop</button>
//     </div>
//   );
// }
