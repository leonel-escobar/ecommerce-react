import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router >
          <NavBar />
          <Switch>  
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/categories/:category" component={ItemListContainer} />
            <Route exact path="/details/:id" component={ItemDetailContainer} /> 
          </Switch> 
        </Router>
        </CartContextProvider>
    </div>
  );
}

export default App;
