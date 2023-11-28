import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import Swipe from '../../components/swiper1';
import Swiper from '../../components/swiper2';

const Home = () => {

  const[text] = useTypewriter({
    words:['Your Digital Health Records','is Secure','is faster ','is accurate'],
    loop: {},
  })

  return (
    <>
       <div className='h-80 bg-sky-200 py-16 m-auto  text-center grid sm:grid-cols-2 sm:grid-reverse-cols align-center'>
        <section>
          <h2 className='font-bold text-4xl'>Ghana Electronic Health Records</h2>
          <span className='text-red-400 text-2xl'>{text}</span>
          <small><Cursor cursorStyle='...'/></small>
          <h4>Advanced Technology For Keeping All Your Medical Records</h4>
       </section>
       <section>
        <img src='' alt='nurse here'/>
       </section>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold'>Ghana Electronic Health Records</h2>
        <p>The Ghana EHR system is an advance technology to keep all medical records. The system is designated to make accessing of records easier,faster,safe and secure. Say <span className='text-red-400 text-lg'>No </span> to manual records Keeping</p>
      </div>
      <div className='grid sm:grid-cols-2 bg-sky-200 text-center  py-6'>
        <section>
            <h3 className='font-bold text-lg'>Vision And Mission</h3>
            <p>The EHR is to uphold accuracy of medical records and concurence of data</p>
        </section>
        <section className='hidden sm:block'>
          <img src='' alt='family' />
        </section>
      </div>
      
      <div className='px-2'>
        <h3 className='font-semibold text-lg'>Latest Blogs</h3>
        <Swipe/>
      </div>
      <div>
        <section className='flex justify-between my-2'>
          <span className='font-semibold'>Latest Reports</span>
          <span><input type='text' placeholder='keyword'/></span>
        </section>

         <Swiper/>
        
      </div>
    </>
 
  )
}

export default Home
