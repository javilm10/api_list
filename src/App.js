// src/App.js

import React from 'react';
import './App.css'; // Estilos generales de la aplicación
import ProductList from './ProductList'; // Importa el componente ProductList

const App = () => {
    return (
        <div className="App">
            <h1>Lista de Productos</h1>
            <ProductList /> {/* Renderiza el componente ProductList */}
        </div>
    );
};

export default App;
