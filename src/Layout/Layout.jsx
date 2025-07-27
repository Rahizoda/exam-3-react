import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Email, Instagram, Phone } from '@mui/icons-material';
import { TextField , Button } from '@mui/material';
import CustomizedSwitches from '../config/Swicher';
import useDarkSide from '../config/useDarkMode';





import img1 from "../assets/image11.png"
import img2 from "../assets/awards (1).png"








const Layout = () => {
      const [ , toggleTheme] = useDarkSide()
  
  return (
    <>
      <div data-aos="zoom-in"  className=' flex justify-around items-center p-[30px] bg-[url(../src/assets/background.png)] text-white ' >

        <img src={img1} alt="" />

        <ul className='flex items-center gap-[30px]'>
          <li>
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/casestudies">
              <h1>Case Studies</h1>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <h1>About Us</h1>
            </Link>
            </li>
        </ul>

        <div  data-aos="zoom-in-down">
          <CustomizedSwitches toggleTheme={toggleTheme} />
        <Button sx={{background:"blue", color:"white"}} className="px-4 py-2 bg-blue-700 text-white rounded  ">Talk to a human</Button>
        </div>
      </div>

      
      <Outlet /> 
      <div data-aos="zoom-in" className='bg-[#1E212C] text-gray-500 flex justify-around items-start p-[50px_0px]'>

        <div data-aos="zoom-in-down">
          <img src={img1} alt="" /> <br />
          <p className='text-[13px]'>Createx SEO Agency is a full-service digital marketing <br /> 
            agency. We help businesses make more money <br />
            through a wealth of performance data and market <br />
            research. We create science-based SEO strategies <br />
            to empower our clients.</p>
          
          <div data-aos="zoom-in-down">
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <Instagram/>
          </div>
        </div>

        <div data-aos="zoom-in-down">
          <h2 className='text-white'>COMPANY</h2> <br />
          <p>About Us</p><br />
          <p>Case Studies</p><br />
          <p>Blog </p> <br />
          <p>Careers</p> <br />
          <p>Contacts</p> <br />
        </div>

        <div data-aos="zoom-in-down">
          <h2 className='text-white'>SERVICES</h2> <br />
          <p>Social Media</p> <br />
          <p>SEO</p> <br />
          <p>Research </p> <br />
          <p>Content & PR</p> <br />
          <p>Payed Traffic</p> <br />
        </div>

        <div data-aos="zoom-in-down">
          <h2 className='text-white'>CONTACT US</h2>  <br />
          <p> <Phone/> (405) 555-0128</p> <br />
          <p > <Email/> hello@createx.com</p> <br />
        </div>

        <div data-aos="zoom-in-down">

          <h2 className='text-white'>SIGN UP TO OUR NEWSLETTER</h2> <br />
          <TextField variant='outlined' fullWidth label="Email@gmail.com" /> <br /> <br />
          <p>*Subscribe to our newsletter to receive communications and early <br />
            updates from Createx SEO Agency.</p>
        </div>
      </div>

      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" className='bg-[#1E212C] text-gray-500 flex justify-between p-[40px] items-start'>

        <img src={img2} alt="" />
        <button>Go to top 🔝 </button>
      </div>
    </>
  );
}

export default Layout;
