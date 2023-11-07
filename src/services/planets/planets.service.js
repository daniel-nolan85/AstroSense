import planets from './planets.data.json';

export const planetsRequest = (input) => {
  return new Promise((resolve, reject) => {
    if (!input) {
      resolve(planets);
      return;
    }
    const filteredPlanets = planets.filter(
      (planet) => planet.name === input || planet.type === input
    );
    if (filteredPlanets.length === 0) {
      reject('No matching planets found');
      return;
    }
    resolve(filteredPlanets);
  });
};
