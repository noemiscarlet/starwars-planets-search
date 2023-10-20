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
}

export type DefaultValueType = {
  column: string;
  comparison: 'maior que' | 'menor que' | 'igual a';
  valueFilter: number;
};
