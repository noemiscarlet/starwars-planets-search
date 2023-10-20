import { useEffect, useState } from 'react';
import { getPlanetsAPI } from '../utils/api';
import { GlobalContext } from './GlobalContext';
import { PlanetType, GlobalContextValue } from '../types';

export function GlobalProvider({ children }: React.PropsWithChildren) {
  const [resultsPlanet, setResultsPlanet] = useState<PlanetType[]>();
  const [filterPlanet, setResultsFilter] = useState<PlanetType[]>();

  useEffect(() => {
    const set = async () => {
      const planets = await getPlanetsAPI();
      setResultsPlanet(planets);
      setResultsFilter(planets);
    };
    set();
  }, []);

  const contextValue: GlobalContextValue | undefined = {
    resultsPlanet,
    setResultsPlanet,
    filterPlanet,
    setResultsFilter,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}
