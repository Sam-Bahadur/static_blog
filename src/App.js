import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Switch>
      <Route path="/" exact Component={Body} />
      </Switch>
      <Body />
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
