import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      {/* Otros componentes o contenido de la aplicación */}
    </div>
  );
};

export default App;
