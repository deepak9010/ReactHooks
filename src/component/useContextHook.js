import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const ThemeContext = createContext();

function UseContextHook() {
    const [theme, setTheme] = useState('light');

    return (
        // 2. Provide the context
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    // 3. Consume the context
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }} onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
}

export default UseContextHook;
