import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Support from './pages/Support';
import Team from './pages/Team';
import Products from './pages/Products';
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <SideBar/>
          <Switch>
            <Route path="/main">
              <Main/>
            </Route>
            <Route path="/support">
              <Support/>
            </Route>
            <Route path="/team">
              <Team/>
            </Route>
            <Route path="/products">
              <Products/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>

  );
};

export default App;
