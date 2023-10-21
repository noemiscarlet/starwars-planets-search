import { ChangeEvent, useContext, useState } from 'react';
import { DEFAULT_OPTIONS, DEFAULT_ORDER } from '../context/ProviderGlobal';
import { OrderType } from '../types';
import { GlobalContext } from '../context/GlobalContext';

export function OrderFilter() {
  const { setFilterOrder } = useContext(GlobalContext);
  const [order, setOrder] = useState<OrderType>(DEFAULT_ORDER);

  const handleChange = (event:ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;

    setOrder({
      ...order,
      [name]: value,
    });
  };

  return (
    <div>
      <select
        onChange={ handleChange }
        name="column"
        data-testid="column-sort"
      >
        {
          DEFAULT_OPTIONS.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))
        }
      </select>
      <label>
        <input
          onChange={ handleChange }
          type="radio"
          name="sort"
          data-testid="column-sort-input-asc"
          value="asc"
        />
        Ascendente
      </label>

      <label>
        <input
          onChange={ handleChange }
          name="sort"
          type="radio"
          data-testid="column-sort-input-desc"
          value="desc"
        />
        Descendente
      </label>

      <button
        onClick={ () => setFilterOrder(order) }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
}
