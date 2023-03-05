import React from "react";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  let text = "salom";
  let simple = () =>{
    console.log("salom");
  }

  return( 
  <DataContext.Provider value={{ text, simple }}>
    {children}
    </DataContext.Provider>
  );
}
