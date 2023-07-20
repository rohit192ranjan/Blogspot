import './App.css';
import Topbar from './Components/Topbar';
 import Single from './Components/Single';
import Settings from './Components/Settings';
import Write from './Components/Write';
import Login from './Components/Login';
import Register from './Components/Register'
import Home from './Components/Home';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Contact from './Components/Contact'
import { useContext } from 'react';
import { Context } from './Context/Context';

function App() {
  const {user} = useContext(Context) ;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Register' element={user?<Home/>:<Register/>}></Route>
        <Route exact path='/Login' element={user?<Home/>:<Login/>}></Route>
        <Route exact path='/Write' element={user?<Write/>:<Login/>}></Route>    
        <Route exact path='/Settings' element={user?<Settings/>:<Home/>}></Route>
        <Route exact path='/Post/:postId' element={<Single/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
