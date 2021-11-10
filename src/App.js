import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AllCycles from './Pages/Shop/AllCycles/AllCycles';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import CycleDetails from './Pages/Shop/CycleDetails/CycleDetails';
import Signin from './Pages/Registration/Signin/Signin';
import SignUp from './Pages/Registration/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/DashBoard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddBiCycle from './Pages/Dashboard/AddBiCycle/AddBiCycle';

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
            <AllCycles />
          </Route>
          <PrivateRoute path="/cycleDetails/:id">
            <CycleDetails />
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/addBiCycle">
            <AddBiCycle />
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