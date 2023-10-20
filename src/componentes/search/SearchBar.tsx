import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export function SearchBar() {
  const { setResultsPlanet, resultsPlanet, setResultsFilter } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const namePlanetFilter = resultsPlanet
      ?.filter((planets) => planets.name.includes(searchTerm));
    setResultsFilter(namePlanetFilter);
  }, [searchTerm, setResultsPlanet]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  return (
    <div>
      <input
        type="text"
        value={ searchTerm }
        onChange={ handleSearchChange }
        data-testid="name-filter"
      />
    </div>
  );
}
