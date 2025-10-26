// @ts-nocheck
/* eslint-disable */

// CONDITION

// import React;
// import sendMetric from 'metrics';
// import sendData from 'data';
// import bigComputations from 'utils';

// const pleaseReviewMe = props => {
//   const [data, setData] = React.useState(bigComputations(props.argument));

//   const [items] = useState([{id: 1}, {id: 2}, {id: 3}]);

//   React.useEffect(() => {
//     document.addEventListener('click', () => {
//       sendMetric('click')
//     })
//   })

//   const click = React.useCallback(id => {
//     sendData(data, id);
//   })

//   return (
//     <React.Fragment>
//       {items.map(item => (
//         <div onClick={() => click(item.id)}>{item.id}</div>
//       ))}
//     </React.Fragment>
//   )
// }

// export pleaseReviewMe;



















































// SOLUTION

// @ts-nocheck

// import React, { useState, useEffect } from "react";
// import sendMetric from "metrics";
// import sendData from "data";
// import bigComputations from "utils";

// const [items] = [{ id: 1 }, { id: 2 }, { id: 3 }];

// const handleMetrics = () => sendMetric("click");

// export const PleaseReviewMe = ({ argument }) => {
//   const [data] = useState(() => bigComputations(argument));

//   useEffect(() => {
//     document.addEventListener("click", handleMetrics);

//     return () => document.removeEventListener("click", handleMetrics);
//   }, []);

//   const handleClick = (id) => {
//     sendData(data, id);
//   };

//   return (
//     <ul>
//       {items.map(({ id }) => (
//         <li key={id} onClick={() => handleClick(id)}>
//           {id}
//         </li>
//       ))}
//     </ul>
//   );
// };
