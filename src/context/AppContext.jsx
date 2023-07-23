import { useState, createContext, useContext, useMemo } from "react";

const GlobalAppContext = createContext(undefined);

function AppContext({ children }) {
  const [string, setString] = useState("");
  const contextValue = {
    string,
    setString,
  };

  return (
    <GlobalAppContext.Provider
      value={useMemo(() => contextValue, [contextValue])}
    >
      {children}
    </GlobalAppContext.Provider>
  );
}

export const useAppContext = () => useContext(GlobalAppContext);

export default AppContext;
