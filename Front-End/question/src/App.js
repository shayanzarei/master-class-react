import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import AddQuestion from './pages/addQuestion/AddQuestion'

import Signup from './pages/signup/Signup';
// import EditAnswer from './pages/editAnswer/EditAnswer'
// import EditQuestion from './pages/editQuestion/EditQuestion';
// import ShowQuestion from './pages/showQuestion/ShowQuestion';

//component
import Header from './component/header/Header.jsx';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/add-question" component={AddQuestion} /> 
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
