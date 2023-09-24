import React, { useState } from "react";
import Context from "./Context";


function MyProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>('light');

  const context = {
    theme,
    setTheme,
  };
  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

export default MyProvider;