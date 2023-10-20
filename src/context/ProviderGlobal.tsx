import { useEffect, useState } from 'react';
import { getPlanetsAPI } from '../utils/api';
import { GlobalContext } from './GlobalContext';
import { PlanetType, GlobalContextValue, DefaultValueType } from '../types';

export function GlobalProvider({ children }: React.PropsWithChildren) {
  const [resultsPlanet, setResultsPlanet] = useState<PlanetType[]>();
  const [filterPlanet, setResultsFilter] = useState<PlanetType[]>();
  const [filterArray, setFilterArray] = useState<DefaultValueType[]>([]);

  useEffect(() => {
    const set = async () => {
      const planets = await getPlanetsAPI();
      setResultsPlanet(planets);
      setResultsFilter(planets);
    };
    set();
  }, []);

  useEffect(() => {
    filterArray.forEach(({ column, comparison, valueFilter }: DefaultValueType) => {
      const filteredPlanets = filterPlanet?.filter((planet: PlanetType) => {
        if (comparison === 'menor que') return Number(planet[column]) < valueFilter;
        if (comparison === 'maior que') return Number(planet[column]) > valueFilter;
        if (comparison === 'igual a') return Number(planet[column]) === +valueFilter;

        return true;
      });

      setResultsFilter(filteredPlanets);
    });
  }, [filterArray]);

  const contextValue: GlobalContextValue | undefined = {
    resultsPlanet,
    setResultsPlanet,
    filterPlanet,
    setResultsFilter,
    filterArray,
    setFilterArray,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}
