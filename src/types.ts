export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
  [key: string]: string | string[];
};

export interface GlobalContextValue {
  resultsPlanet: PlanetType[] | undefined;
  setResultsPlanet: React.Dispatch<React.SetStateAction<PlanetType[] | undefined>>;
  filterPlanet: PlanetType[] | undefined;
  setResultsFilter: React.Dispatch<React.SetStateAction<PlanetType[] | undefined>>;
  filterArray: DefaultValueType[] | [];
  setFilterArray: React.Dispatch<React.SetStateAction<DefaultValueType[] | []>>;
  filterOptionsArray: string[];
  setFilterOptionsArray: React.Dispatch<React.SetStateAction<string[]>>;
  filterOrder: OrderType | undefined
  setFilterOrder: React.Dispatch<React.SetStateAction<OrderType | undefined>>;
}

export type DefaultValueType = {
  column: string;
  comparison: 'maior que' | 'menor que' | 'igual a';
  valueFilter: number;
};

export type OrderType = {
  column: string
  sort: string
};
