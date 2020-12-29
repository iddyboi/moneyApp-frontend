import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
