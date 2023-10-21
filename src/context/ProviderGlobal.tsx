import { useEffect, useState } from 'react';
import { getPlanetsAPI } from '../utils/api';
import { GlobalContext } from './GlobalContext';
import { PlanetType, GlobalContextValue, DefaultValueType, OrderType } from '../types';

export const DEFAULT_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
export const DEFAULT_ORDER = { column: 'population', sort: '' };

const sortAsc = (a: PlanetType, b: PlanetType, column: string) => {
  if (a[column] === 'unknown') return 1;
  if (b[column] === 'unknown') return -1;
  return Number(a[column]) - Number(b[column]);
};

const sortDesc = (a: PlanetType, b: PlanetType, column: string) => {
  if (a[column] === 'unknown') return 1;
  if (b[column] === 'unknown') return -1;
  return Number(b[column]) - Number(a[column]);
};

export function GlobalProvider({ children }: React.PropsWithChildren) {
  const [resultsPlanet, setResultsPlanet] = useState<PlanetType[]>();
  const [filterPlanet, setResultsFilter] = useState<PlanetType[]>();
  const [filterArray, setFilterArray] = useState<DefaultValueType[]>([]);
  const [filterOptionsArray, setFilterOptionsArray] = useState<string[]>(DEFAULT_OPTIONS);
  const [filterOrder, setFilterOrder] = useState<OrderType>();

  useEffect(() => {
    const set = async () => {
      const planets = await getPlanetsAPI();
      setResultsPlanet(planets);
      setResultsFilter(planets);
    };
    set();
  }, []);

  useEffect(() => {
    // Mapeia os filtros atuais para obter os resultados filtrados
    const filteredPlanets = filterArray
      .reduce((filtered, { column, comparison, valueFilter }: DefaultValueType) => {
        return filtered?.filter((planet: PlanetType) => {
          if (comparison === 'menor que') return Number(planet[column]) < valueFilter;
          if (comparison === 'maior que') return Number(planet[column]) > valueFilter;
          if (comparison === 'igual a') return Number(planet[column]) === +valueFilter;
          return true;
        });
      }, resultsPlanet);

    setResultsFilter(filteredPlanets);

    const filteredOptions = DEFAULT_OPTIONS.filter((option) => {
      // Verifique se a opção não está presente no filterArray
      return !filterArray.some((filter) => filter.column === option);
    });

    // Atualize o estado das opções de filtro
    setFilterOptionsArray(filteredOptions);
  }, [filterArray]);

  const applyOrder = () => {
    if (!filterOrder || !filterPlanet) {
      return;
    }

    const { column, sort } = filterOrder;

    filterPlanet.sort((a: PlanetType, b: PlanetType) => {
      if (sort === 'asc') {
        return sortAsc(a, b, column);
      }
      if (sort === 'desc') {
        return sortDesc(a, b, column);
      }
      return 1;
    });

    setResultsFilter([...filterPlanet]);
  };

  useEffect(() => {
    applyOrder();
  }, [filterOrder]);

  const contextValue: GlobalContextValue | undefined = {
    resultsPlanet,
    setResultsPlanet,
    filterPlanet,
    setResultsFilter,
    filterArray,
    setFilterArray,
    filterOptionsArray,
    setFilterOptionsArray,
    filterOrder,
    setFilterOrder,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}
