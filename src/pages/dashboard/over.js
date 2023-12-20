import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './dashboard';
import { useNavigate } from 'react-router-dom';

const Over = () => {

  const{userData} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
    <div className='h-screen bg-slate-100'>
       <button onClick={()=>{navigate(`/ehr/${userData?.ghanacard}`)}}> Dashboard</button>
      <Link to='/' className='btn'>Back home</Link>
    </div>
     
      <div className='h-screen bg-slate-300'>

      </div>
      <div className='h-screen bg-slate-500'>

      </div>
    </>
  )
}

export default Over
