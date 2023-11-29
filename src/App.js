import {Routes,Route} from 'react-router-dom';
import Main from './pages/landing/main';
import Home from './pages/landing/home';
import Ehr from './pages/dashboard/ehr';
import Login from './pages/landing/login';
import Erropage from './pages/landing/error';
import Dashboard from './pages/dashboard/dashboard';
import Over from './pages/dashboard/over';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route element={<Main/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<Erropage/>} />
          </Route>
          <Route element={<Dashboard/>}>
            <Route path='/ehr/:userId' element={<Ehr/>} />
            <Route path='/overview' element={<Over/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
