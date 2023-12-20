import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './dashboard';
import { useNavigate } from 'react-router-dom';

const Over = () => {

  const{userData} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
  <button onClick={()=>{navigate(`/ehr/${userData?.ghanacard}`)}}> Dashboard</button>
      <Link to='/' className='btn'>Back home</Link>
    </div>
  )
}

export default Over
