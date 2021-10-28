import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting={'Bienvenido a mi proyecto en React'} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
