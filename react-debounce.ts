// CONDITION

// Should write debounced function for optimization input requests

// import { useState, useEffect } from "react";

// export default function App() {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     console.log(value); // <=== request
//   }, [value]);

//   return (
//     <div>
//       <input onChange={(e) => setValue(e.target.value)} />
//     </div>
//   );
// }









































// SOLUTION

// import { useState, useEffect } from "react";
// import { useDebounce } from "./useDebounce";

// export default function App() {
//   const [value, setValue] = useState("");
//   const debouncedValue = useDebounce(value);

//   useEffect(() => {
//     console.log(value);
//   }, [debouncedValue]);

//   return (
//     <div>
//       <input onChange={(e) => setValue(e.target.value)} />
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export const useDebounce = <T>(value: T, delay: number = 300) => {
//   const [debounced, setDebounced] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebounced(value);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [value, delay]);

//   return debounced;
// };
