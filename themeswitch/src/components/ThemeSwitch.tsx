import Context from "@/Context/Context";
import React, { useContext, useEffect } from "react";

function ThemeSwitch() {
  const { theme, setTheme} = useContext(Context);

  useEffect(() => {
  }, [theme]);
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <div>
        <div>
        <button onClick={toggleTheme}>
      {theme == 'light' ? 'Ativar Dark Theme' : 'Ativar Light Theme'}
    </button>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;
