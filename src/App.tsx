import React from 'react';
import './App.css';
import { Table } from './componentes/table/Table';
import { GlobalProvider } from './context/ProviderGlobal';
import { SearchBar } from './componentes/search/SearchBar';
import { FilterNumber } from './componentes/filterNumbers/filterNumbers';

function App() {
  return (
    <GlobalProvider>
      <SearchBar />
      <FilterNumber />
      <Table />
    </GlobalProvider>
  );
}

export default App;
