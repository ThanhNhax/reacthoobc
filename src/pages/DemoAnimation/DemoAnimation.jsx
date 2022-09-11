// import React, { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
// export default function DemoAnimation() {
//   const [toggle, setToggle] = useState(false);
//   const [styles, api] = useSpring(() => ({
//     from: { opacity: 0, color: "red", fontSize: 10 },
//   }));

//   // Update spring with new props
//   // Stop animation
//   useEffect(() => {
//     return () => {
//       api.stop();
//     };
//   });
//   return (
//     <div className="container">
//       <button
//         onClick={() => {
//           api.start({ opacity: 1, color: "blue", fontSize: 20 });
//         }}
//       >
//         Start
//       </button>
//       <button
//         onClick={() => {
//           api.start({ opacity: 1, color: "red", fontSize: 10 });
//         }}
//       >
//         Stop
//       </button>
//       <animated.div style={styles}>i will fade</animated.div>
//     </div>
//   );
// }
