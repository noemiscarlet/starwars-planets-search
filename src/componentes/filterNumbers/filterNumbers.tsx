import React, { ChangeEvent, useContext, useState } from 'react';
import { DefaultValueType } from '../../types';
import { GlobalContext } from '../../context/GlobalContext';

const DEFAULT_VALUE: DefaultValueType = {
  column: 'population',
  comparison: 'maior que',
  valueFilter: 0,
};

export function FilterNumber() {
  const { setFilterArray, filterArray } = useContext(GlobalContext);
  const [filterNumeric, setFilterNumeric] = useState<DefaultValueType>(DEFAULT_VALUE);

  const handleChange = (event:ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;

    setFilterNumeric({
      ...filterNumeric,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilterArray(
      (prevState) => prevState && [...prevState, filterNumeric],
    );

    setFilterNumeric(DEFAULT_VALUE);
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChange }
        value={ filterNumeric.column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
        value={ filterNumeric.comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="valueFilter"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
        value={ filterNumeric.valueFilter }
      />
      <button onClick={ handleClick } data-testid="button-filter">Filtrar</button>
    </div>
  );
}
