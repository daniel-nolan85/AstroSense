import { useState, createContext } from 'react';

export const ApodContext = createContext();

export const ApodContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ApodContext.Provider value={{ open, setOpen }}>
      {children}
    </ApodContext.Provider>
  );
};
