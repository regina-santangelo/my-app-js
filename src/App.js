import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const handleOnAdd = (quantity)=> {
    console.log('La cantidad de productos seleccionados es', quantity)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting="Bienvenido a mi E-Commerce en desarrollo :)" />
        <Counter stock={11} initial={1} onAdd={handleOnAdd}/>
        
      </header>
      <ItemDetailContainer />
    </div>
    
  );
}

export default App;
