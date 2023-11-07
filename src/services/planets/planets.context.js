import { useState, useEffect, createContext } from 'react';
import { planetsRequest } from './planets.service';

export const PlanetsContext = createContext();

export const PlanetsContextProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    retrievePlanets();
  }, []);

  const retrievePlanets = () => {
    setIsLoading(true);
    planetsRequest('')
      .then((results) => {
        setIsLoading(false);
        setPlanets(results);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <PlanetsContext.Provider value={{ planets, isLoading, error }}>
      {children}
    </PlanetsContext.Provider>
  );
};
