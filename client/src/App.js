import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/signup" exact component={SignupPage}/>
        <Route path="/user/:user" component={UserPage}/>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
