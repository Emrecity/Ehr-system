import {Routes,Route} from 'react-router-dom';
import Main from './frontend/pages/landing/main';
import Home from './frontend/pages/landing/home';
import Ehr from './frontend/pages/dashboard/ehr';
import Login from './frontend/pages/landing/login';
import Erropage from './frontend/pages/landing/error';
import Dashboard from './frontend/pages/dashboard/dashboard';
import Over from './frontend/pages/dashboard/over';

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
