import React from 'react';
import './App.css';
import { Table } from './componentes/table/Table';
import { GlobalProvider } from './context/ProviderGlobal';
import { SearchBar } from './componentes/search/SearchBar';

function App() {
  return (
    <GlobalProvider>
      <SearchBar />
      <Table />
    </GlobalProvider>
  );
}

export default App;
