import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DescriptionIcon from '@mui/icons-material/Description';

const mobilenav = () => {
  return (
    <div>
       <ul className='flex flex-col top-4 sm:hidden'>
            <li className='nav'><Link to='/'><HomeIcon/>Home</Link></li>
            <li className='nav'><Link to='/report'><AssessmentIcon/>Reports</Link></li>
            <li className='nav'><Link to='/login'><DescriptionIcon/>Ehr</Link></li>
        </ul>
    </div>
  )
}

export default mobilenav
