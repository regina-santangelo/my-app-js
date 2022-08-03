import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const handleOnAdd = (quantity)=> {
  //   console.log('La cantidad de productos seleccionados es', quantity)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting="Bienvenido a mi E-Commerce en desarrollo :)" />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando" />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            
          </Routes>
          
        </header>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
