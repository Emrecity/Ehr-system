import React,{useContext, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from './dashboard';
import Data from '../../components/data';

const Ehr = () => {
  const {userId} = useParams();
  const {setUserData} = useContext(AppContext);

  useEffect(()=>{
     const UserInfo = Data.find((user)=>{
      return user.ghanacard === userId
    })

    setUserData(UserInfo);
   
  })

  return (
    <div className='h-screen bg-slate-300'>
        <h1>This is ehr page {userId}</h1>
       <Link className='btn' to='/overview'>overview</Link>
    </div>
  )
}

export default Ehr
