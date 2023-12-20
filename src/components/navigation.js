import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Mobilenav from './mobilenav';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
    const[toggle ,setToggle] = useState(false);
    const Close = ()=>{
      return(
        <span className='text-white'>
            <CloseIcon/>Close
        </span>
        
      )
    }
  return (
    <>
      <nav className='flex justify-between bg-sky-400 sticky top-0' >
        <span><img src='' alt='logo'/></span>
        <span> <button className='block sm:hidden' onClick={()=>{setToggle(!toggle)}}>{!toggle?<MenuIcon/>:<Close/>}</button>
        { toggle &&  <Mobilenav/>} </span>
        <ul className=' hidden sm:block sm:flex'>
            <li className='nav'><Link to='/'>Home</Link></li>
            <li className='nav'><Link to='/report'>Reports</Link></li>
            <li className='nav'><Link to='/login'>Ehr</Link></li>
        </ul>
      </nav>  

    </>
  )
}

export default Navigation
