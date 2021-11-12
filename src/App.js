import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AllBiCycles from './Pages/AllBiCycles/AllBiCycles';
import BiCycleDetails from './Pages/BiCycleDetails/BiCycleDetails';
import Signin from './Pages/Registration/Signin/Signin';
import SignUp from './Pages/Registration/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/DashBoard/Dashboard';
import PrivateRoute from './Pages/Registration/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allCycles">
            <AllBiCycles />
          </Route>
          <PrivateRoute path="/biCycleDetails/:id">
            <BiCycleDetails />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;