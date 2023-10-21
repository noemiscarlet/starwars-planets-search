import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { DefaultValueType } from '../types';

export function Filters({ column, comparison, valueFilter }: DefaultValueType) {
  const { filterArray, setFilterArray } = useContext(GlobalContext);

  const deleteFilter = () => {
    const filterIndex = filterArray.findIndex((filter) => filter.column === column);

    if (filterIndex !== -1) {
      const updatedFilterArray = [...filterArray];

      updatedFilterArray.splice(filterIndex, 1);

      setFilterArray(updatedFilterArray);
    }
  };
  return (
    <li data-testid="filter">
      {column}
      {' '}
      {comparison}
      {' '}
      {valueFilter}
      <button onClick={ deleteFilter }>
        X
      </button>
    </li>
  );
}
