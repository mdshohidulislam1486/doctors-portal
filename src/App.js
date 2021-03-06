import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard1/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';



function App() {
  return (
    
      <AuthProvider>
        <Router>
          <Switch>
          <Route exact path='/'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
      
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            

          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
