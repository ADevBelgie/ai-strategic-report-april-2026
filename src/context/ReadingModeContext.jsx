import React, { createContext, useContext, useState, useEffect } from 'react';

const ReadingModeContext = createContext();

export const ReadingModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const saved = sessionStorage.getItem('reading-mode');
    return saved || 'expert';
  });

  useEffect(() => {
    sessionStorage.setItem('reading-mode', mode);
  }, [mode]);

  return (
    <ReadingModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ReadingModeContext.Provider>
  );
};

export const useReadingMode = () => {
  const context = useContext(ReadingModeContext);
  if (!context) {
    throw new Error('useReadingMode must be used within a ReadingModeProvider');
  }
  return context;
};
