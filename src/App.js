import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboards from './pages/Dashboards';
import Home from './pages/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard/home" />
          </Route>
          <Route path="/dashboard/:page"><Dashboards /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
