import React, {useContext} from 'react';
import {AppContext} from '../pages/dashboard/dashboard';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import ImageIcon from '@mui/icons-material/Image';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NotesIcon from '@mui/icons-material/Notes';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Sidebar = () => {
  const {userData} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className='sticky top-1 bg-blue-500 h-screen w-1/3 sm:w-1/5 md:w-fit rounded-lg m-2 text-center text-white grid justify-between'>
      <section >
        <h1 className='text-4xl'>Profile</h1><hr/>
        <img src={userData?.img} alt='profile' className='rounded-full mx-auto p-1 pt-3 mb-5' width='132' height='132' />
        <span className='font-bold text-xl mx-auto pr-2 text-center'>{userData?.name}</span><br/>
        <span>{userData?.occupation}</span>
      </section><hr/>
      <ul className='grid pl-2'>
      <li className='side-nav'>
        <section className='flex gap-2'>
          <DashboardIcon/>
          <button onClick={()=>{navigate('/ehr/'+userData.ghanacard)}}>Dashboard</button>
        </section>
       </li>
        <li className='side-nav'><button onClick={()=>{navigate('/overview')}}><span className='mr-4'><SummarizeIcon/>
          </span> Overview</button></li>
        <li className='side-nav'><button onClick={()=>{navigate('/ehr/'+userData.ghanacard)}}><span className='mr-12'>
        <AnalyticsIcon/>
          </span> Labs </button></li>
        <li className='side-nav'><button onClick={()=>{navigate('/ehr/'+userData.ghanacard)}}><span className='mr-4'>
        <ImageIcon/>
          </span> Imagings</button></li>
        <li className='side-nav'><button onClick={()=>{navigate('/ehr/'+userData.ghanacard)}}><span className='mr-11 hover:mr-6'>
        <NotesIcon /> 
          </span>Notes</button></li>
        <li className='side-nav'><button onClick={()=>{navigate('/ehr/'+userData.ghanacard)}}><span className='mr-3'>
        <MedicalServicesIcon/> 
          </span>Medicines</button></li>
      </ul><br/><hr/>
      <span><button onClick={()=>{navigate('/login')}}><LogoutIcon/>Logout</button></span>
    </div>
  )
}

export default Sidebar
