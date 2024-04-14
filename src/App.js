import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import OverView from './components/OverView/OverView';
import Profile from './components/Profile/Profile';
import UsersList from './components/UsersList/UsersList';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/overview' Component={OverView}>
            <Route path='profile' Component={Profile}/>
            <Route path='usersList' Component={UsersList} />
          </Route>
       </Routes>
    </div>
  );
}

export default App;
