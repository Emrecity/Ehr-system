import React, { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/sidebar';
import MenuIcon from '@mui/icons-material/Menu';



export const AppContext = createContext(null);

const Dashboard = () => {

  const [toggle, setToggle] = useState('True');
  const  [userData, setUserData] = useState([]);

  return (
    <AppContext.Provider value={{userData,setUserData}}>
    <div className='flex sticky bottom-0'>
      { toggle && <SideBar/>}
      <main className='w-full'>
         <div className='flex bg-white justify-between sticky top-0'>
          <section className='flex'>
            <button onClick={()=>{setToggle(!toggle)}} className='mr-3 rounded-sm'><i><MenuIcon/></i></button>
            <h1><b>Dashboard</b></h1>
          </section>
        
            <ul className='flex mr-2'>
              <li><span>Alert</span></li>
              <li><span className='m-3'>Help</span></li>
              <li><span>Settings</span></li>
            </ul>


          </div>
     
          <Outlet/>
      </main>
      
    </div>
    </AppContext.Provider>
  )
}

export default Dashboard
