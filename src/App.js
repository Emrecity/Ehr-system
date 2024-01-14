import {Routes,Route,useLocation} from 'react-router-dom';
import Main from './pages/landing/main';
import Home from './pages/landing/home';
import Ehr from './pages/dashboard/ehr';
import Login from './pages/landing/login';
import Erropage from './pages/landing/error';
import Dashboard from './pages/dashboard/dashboard';
import Over from './pages/dashboard/over';
import Scan from './pages/dashboard/scan';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Routes  >
          <Route element={<Main/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
          </Route>
          <Route element={<Dashboard/>}  location={location} key={location.key}>
            <Route path='/ehr/:userId' element={<Ehr/>} />
            <Route path='/overview' element={<Over/>} />
            <Route path='/scan' element={<Scan/>} />
          </Route>
          <Route path='*' element={<Erropage/>} />
      </Routes >
    </div>
  );
}

export default App;
