// Create a context
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

// Create a provider
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Create a component that consumes the context
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      Current Theme: {theme}
    </button>
  );
}


// App component using the provider
function ContextApi() {
    return (
        <ThemeProvider>
            <ThemedButton />
        </ThemeProvider>
    );
}

export default ContextApi;