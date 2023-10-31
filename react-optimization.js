// CONDITION
// U should optimize everything that u can

// import { useState } from "react";

// const initList = () => {
//   return Array.from({ length: 200 }, (_el, index) => ({
//     value: Math.random(),
//     label: `row ${index + 1}`
//   }));
// };

// export default function App() {
//   const [list] = useState(initList());

//   const handleUpdate = () => {
//     list[0].value = Math.random();
//   };

//   return (
//     <div>
//       <h1>List App</h1>
//       <Button onClick={handleUpdate}>Update "row 1"</Button>
//       {list.map(({ label, value }) => (
//         <Row label={label} value={value} key={label} />
//       ))}
//     </div>
//   );
// }

// const Button = (props) => {
//   const { children, onClick } = props;

//   return <button onClick={onClick}>{children}</button>;
// };

// const Row = (props) => {
//   const { label, value } = props;
//   return (
//     <div style={{ marginTop: "8px" }}>
//       <span style={{ marginRight: "20px" }}>{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// };

// SOLUTION
// import { useState, memo, useCallback } from "react";

// const initList = () => {
//   console.log("initList");
//   return Array.from({ length: 200 }, (_el, index) => ({
//     value: Math.random(),
//     label: `row ${index + 1}`,
//   }));
// };

// const renderInitList = initList();

// export default function App() {
//   const [list, setList] = useState(renderInitList);

//   const handleUpdate = useCallback(() => {
//     setList((prev) =>
//       prev.map((item, index) => {
//         if (index === 0) {
//           return { ...item, value: Math.random() };
//         }

//         return item;
//       })
//     );
//   }, []);

//   return (
//     <div>
//       <h1>List App</h1>
//       <Button onClick={handleUpdate}>Update "row 1"</Button>
//       {list.map(({ label, value }) => (
//         <Row label={label} value={value} key={label} />
//       ))}
//     </div>
//   );
// }

// const Button = memo((props) => {
//   console.log("Button");
//   const { children, onClick } = props;

//   return <button onClick={onClick}>{children}</button>;
// });

// const Row = memo((props) => {
//   console.log("Row");
//   const { label, value } = props;
//   return (
//     <div style={{ marginTop: "8px" }}>
//       <span style={{ marginRight: "20px" }}>{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// });
