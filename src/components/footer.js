import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footer = () => {
  return (
    <>
    <div className='bg-sky-400'>
        <div className='flex justify-between p-2'>
          <h1>Ehr System</h1>
          <section>
          <input type='email' placeholder='Enter your email...'/>
          <button className='bg-white btn-secondary'>SUBSCRIBE</button>
          </section>

        </div>
       <div className='grid grid-cols-2 p-3 sm:grid-cols-3'>
          <ul>
          <h3 className='foot-h3'>Quick Links</h3>
            <li>Home</li>
            <li>Reports</li>
            <li>EHR</li>
            <li>Articles</li>
          </ul>
          <ul>
          <h3 className='foot-h3'>Consulto</h3>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <h3 className='foot-h3'>More</h3>
            <li>Help</li>
            <li>Developers</li>
            <li>Privacy Policy</li>
            <li>Terms & conditions</li>
          </ul>
       </div>
      </div>
      <div className='flex justify-between p-1'>
        <h1>Quick Contacts</h1>
        <ul className='flex gap-2'>
          <li><FacebookIcon/></li>
          <li><TwitterIcon/></li>
          <li><InstagramIcon/></li>
          <li><LinkedInIcon/></li>
        </ul>
      </div>
       <div className='h-8 bg-sky-400 text-center'>
          <small>Copy Rights &copy; 2024 Ehr_Powered By PhlyTech-Pro </small>
       </div>
    </>
  )
}

export default footer
