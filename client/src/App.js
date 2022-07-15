import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
//import LoginPage from './pages/LoginPage/LoginPage';
//import SignupPage from './pages/SignupPage/SignupPage';
import UserPage from './pages/UserPage/UserPage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        {/* <Route path="/login" exact component={LoginPage}/> */}
        {/* <Route path="/signup" exact component={SignupPage}/> */}
        <Route path="/user" component={UserPage}/>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
