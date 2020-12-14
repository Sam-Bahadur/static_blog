import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Body from './components/Body/Body';
import BlogView from './components/Blog/BlogView'
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/blogs/:id" exact component={BlogView} />
      <Route path="/" exact component={Body} />
      <Route exact component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
