// import axios from "axios";
// import React from "react";
// import { useState, createContext, useEffect } from "react";

// const NutitritionContext = createContext(null);
// const NutitritionContextProvider = () => {
//   const [nutrition, setNutrition] = useState([]);
//   const [initialized, setInitialized] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   //check to see if the user is logged In
//   //if user is logged in set isLoading to true
//   //Make Get request to the nutrition Standpoint

//   useEffect(() => {
//     async function fetch() {
//       try {
//         let response = await axios.get("http://localhost:3001/nutrition/");
//         setNutrition(response.data);
//       } catch (err) {
//         setError(err);
//         console.log(err);
//       }
//     }
//     fetch();
//   }, []);

//   return (
//     <NutitritionContext.Provider value={{nutition: [nutrition, setNutrition],initialized: [initialized, setInitialized],loading: [isLoading, setIsLoading],error: [error, setError],
//       }}
//     ></NutitritionContext.Provider>
//   );
// };

// export { NutitritionContextProvider, NutitritionContext };
import { createContext } from "react";

export const NutitritionContext = createContext(null)
