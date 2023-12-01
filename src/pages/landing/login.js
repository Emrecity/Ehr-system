import React from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 
const navigate = useNavigate() 

const schema = yup.object().shape({
    ghanacard: yup.string().max(15).required('Your Ghana Card Number is required'),
    password: yup.string().min(4).max(8).required('incorrect password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null]).required(),
});

const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
});

function submit(data){

    console.log(data);
    alert("Successful")
    navigate('/ehr/'+data.ghanacard)
}

  return (
    <div className='h-screen bg-slate-300 py-11 min-[400]: py-24'>
      <form onSubmit={handleSubmit(submit)} className=' mx-auto my-auto w-fit p-3 text-center bg-slate-50 rounded-md border-2 shadow-md'>
      
      <div className='mx-auto'>
        <h1 className="text-lg font-bold">Hello Welcome,</h1>
        <p className="lead">Sign in to your account to continue</p>
        <img src="./img/avatar.png" alt="Charles Hall"  width="132" 
           className="mx-auto"  
        />
      </div><hr/><br/>
      <div>
            <label>Ghana Identity Card</label><br/>
            <input type='text' placeholder='GHA-000000000-2' {...register('ghanacard')}/><br/>
            <small>{errors.ghanacard?.message}</small>
        </div><br/>
        <div>
            <label>Password</label><br/>
            <input type='password' placeholder='********' {...register('password')}/><br/>
            <small>{errors.password?.message}</small>
       </div><br/>
       <div>
            <label>Confirm Password</label><br/>
            <input type='password' placeholder='********' {...register('confirmPassword')}/><br/>
            <small>{errors.confirmPassword?.message}</small>
        </div><br/>
            <input type='submit' className='btn'/>
        </form>
    </div>
  )
}

export default Login
