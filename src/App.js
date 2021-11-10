import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import AddPlans from './Pages/Admin/AddPlans/AddPlans';
import ManageAllPlans from './Pages/Admin/ManageAllPlans/ManageAllPlans';
import MyPlans from './Pages/Admin/MyPlans/MyPlans';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AllCycles from './Pages/Shop/AllCycles/AllCycles';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import CycleDetails from './Pages/Shop/CycleDetails/CycleDetails';
import Signin from './Pages/Registration/Signin/Signin';
import SignUp from './Pages/Registration/SignUp/SignUp';

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
          <PrivateRoute path="/myPlans">
            <MyPlans />
          </PrivateRoute>
          <PrivateRoute path="/manageAllPlans">
            <ManageAllPlans />
          </PrivateRoute>
          <PrivateRoute path="/addPlans">
            <AddPlans></AddPlans>
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