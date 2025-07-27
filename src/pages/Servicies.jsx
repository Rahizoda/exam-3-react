import PieChartIcon from '@mui/icons-material/PieChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { TextField } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import React, {  useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode,  Thumbs } from 'swiper/modules';



import img1 from "../assets/illustration.png"
import img2 from "../assets/awards.png"
import img3 from "../assets/Clients.png"
import img4 from "../assets/image.png"
import img5 from "../assets/Figures.png"
import img6 from "../assets/illustration (1).png"
import img7 from "../assets/illustration (2).png"
import img8 from "../assets/illustration (3).png"
import img9 from "../assets/client-logo.png"
import img10 from "../assets/features.png"
import img11 from "../assets/features1122.png"
import img12 from "../assets/client-logo (1).png"
import img13 from "../assets/Benefits.png"
import img14 from "../assets/image (1).png"
import img15 from "../assets/small (1).png"
import img16 from "../assets/small.png"



const Servicies = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 
 
  return (
    <>
    
      <div data-aos="flip-right" className='bg-[url(./src/assets/backgroundqwertyu.png)] w-[100%] h-[130vh] text-white bg-no-repeat '>

        <div  className='flex justify-around items-center p-[150px_0px]'>
          
        <div>
        <h1 className='text-[40px]'>Best <span className='text-[#3d39b9]'> SEO & Marketing</span> <br /> Solutions for You</h1> <br />
        <button className='p-[10px_30px] border rounded-2xl border-white '>Get a free analysis</button>
        </div>

        <img className='w-[500px]' src={img1} alt="" />
        </div>

        <div className='text-white flex justify-center items-center gap-[30px]'>
          <h2> <PieChartIcon sx={{ color: "blue" }} /> SEO Content Strategy  </h2> <hr />
          <h2><CampaignIcon sx={{ color: "blue" }} /> Content Marketing </h2> <hr />
          <h2><ImportantDevicesIcon sx={{ color: "blue" }} /> Website & Social Media Marketing  </h2>
        </div>
      </div>

      <div data-aos="fade-down-left" className=' bg-white dark:bg-[#1E212C] text-black dark:text-white'>

        <div className='  flex justify-around items-center p-[100px_0px] bg-white text-black dark:bg-[#1E212C] dark:text-white  '>

        <h3>Createx SEO Agency is a full-service digital <br />
          marketing agency. We help businesses make more <br />
          money through a wealth of performance data and <br />
          market research. We create science-based SEO <br />
            strategies to empower our clients.</h3>
          
          <img className='w-[300px]' src={img2} alt="" />
        </div>

        <img className='w-[80%] m-auto p-[30px]' src={img3} alt="" />
      </div>


      <div data-aos="fade-down-right" className='flex justify-around bg-white dark:bg-[#1E212C] text-black dark:text-white items-center p-[100px_0px] '>

        <div className=' bg-white dark:bg-[#1E212C] text-black dark:text-white'>

          <h1 className='text-3xl'>Createx Agency </h1> <br />
          <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat <br />
            montes, viverra ullamcorper mi dui, nulla pharetra. <br />
            Sapien urna nullam elit diam mauris orci. Volutpat quam <br />
            tempus justo, aliquam. Tortor ultrices mattis eget orci <br />
            eu nisi sed augue odio. Et senectus risus, pharetra, <br />
            tristique libero. Dolor risus ac quam dictum mattis <br />
            ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis <br />
            et quis hendrerit. Cras at ac magna ultricies orci.</p> <br />
          <br />
          <button className='bg-blue-700 text-white p-[10px_30px] rounded-xl '> More about us </button>
        </div>

        <img className='w-[500px]' src={img4} alt="" />
      </div>

      <img data-aos="fade-down" className='w-[40%] m-auto p-[100px_0px] ' src={img5} alt="" />
    
      <div data-aos="fade-down" className='text-center p-[50px_0px] '>

        <h1 className='text-3xl'>Our services</h1> <br />
        <div className='flex justify-between w-[80%]  m-auto'> 
          <button className='p-[10px_30px] border border-blue-700 text-blue-700 rounded-xl '>Social Media</button>
          <button className='p-[10px_30px]  '>SEO</button>
          <button className='p-[10px_30px]  '>Research</button>
          <button className='p-[10px_30px]  '>Content & PR</button>
          <button className='p-[10px_30px]  '>Payed Traffic</button>
          
        </div>

      </div>

      <div data-aos="flip-left" className='flex bg-white text-black dark:bg-[#1E212C] dark:text-white   justify-around items-center p-[100px_0px]'>

        <div>

          <h1 className='text-3xl'>Complete Worflow For Any <br /> SEO Professional</h1> <br />
          <p>☑️ Aenean enim tellus morbi nisl vulputate dictumst.</p>
          <p>☑️ Nibh sapien volutpat lacus augue.</p>
          <p>☑️ Vel in amet, placerat adipiscing est pharetra.</p>
          <p>☑️ Gravida ornare sit in et ut sit sem id.</p>
          <p>☑️ Ultrices pellentesque dictum enim egestas ac diam.</p>
          <p>☑️ Sit semper enim senectus integer ut turpis et.</p> <br /><br />
          <button className='p-[10px_30px] border border-blue-700 text-blue-700 rounded-xl '>Social Media</button>
          <button className='p-[10px_30px] border ml-[20px] border-blue-700 text-white bg-blue-700 rounded-xl '>Social Media</button>
          
        </div>

        <img className='w-[550px]' src={img6} alt="" />
      </div>


      <div  data-aos="flip-up" className='bg-[#1E212C] text-white  flex p-[100px_0px] justify-around items-center '>

        <img src={img7} alt="" />
        <div>
          <h1 className='text-3xl'>Get a Free SEO Analysis!</h1> <br />

          <TextField label="Name" variant='outlined' /> 
          <TextField sx={{marginLeft:"20px" }} label="Username" variant='outlined' /> <br /> <br />
          <TextField label="Email@gmail.com" fullWidth variant='outlined' /> <br /><br />

          <div className='flex justify-between items-center'>
          <span>☑️ I agree to receive communications from <br /> Createx SEO Agency </span> <br />
            
          <button className='bg-blue-700 text-white p-[10px_30px] rounded-xl'>Get a free analysis </button>
          </div>
        </div>

      </div>
      

      <div data-aos="zoom-out-up" className='flex justify-around items-center p-[100px_0px] '>

        <div>
          <h1 className='text-3xl'>Freequently Ask Questions</h1> <br />
          <p>➖ Aliquet lectus urna viverra in odio?</p> <br />
          <p className='text-gray-600'>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum <br />
            faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi <br />
            semper massa ac facilisis.</p> <br />
          
          <p>➕ Orci commodo, viverra orci mollis ut euismod?</p> <br />
          <p>➕ Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</p> <br />
          <p>➕ Orci commodo, viverra orci mollis ut euismod?</p> <br />
          <button className='p-[10px_30px] text-white bg-[blue] rounded-xl  '>Discover more ➡️</button>
        </div>

        <img className='w-[400px]' src={img8} alt="" />
      </div>

      
      <h1 className='text-3xl text-center mb-[50px] '>Read our clients' case studies</h1> 
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img9} alt="" />
            <br />
            <h2 className='text-xl'>Charity organisation</h2> <br />

            <p className='text-gray-500'>Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.</p> <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] bg-[url(./src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ' >
            <div className='bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] '>
              
              <img src={img9} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img11} alt="" />
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img12} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img9} alt="" />
            <br />
            <h2 className='text-xl'>Charity organisation</h2> <br />

            <p className='text-gray-500'>Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.</p> <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] bg-[url(./src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ' >
            <div className='bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] '>
              
              <img src={img9} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img11} alt="" />
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img12} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img10} alt="" />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img9} alt="" />
            <br />
            <h2 className='text-xl'>Charity organisation</h2> <br />

            <p className='text-gray-500'>Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.</p> <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] bg-[url(./src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ' >
            <div className='bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] '>
              
              <img src={img9} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img11} alt="" />
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img12} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img9} alt="" />
            <br />
            <h2 className='text-xl'>Charity organisation</h2> <br />

            <p className='text-gray-500'>Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.</p> <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] bg-[url(src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ' >
            <div className='bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] '>
              
              <img src={img9} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img11} alt="" />
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]' >
            <img className='w-[70px]' src={img12} alt="" />
              <br /><br /><br /><br /><br /><br /><br />

              <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        
      </Swiper>

      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=' flex justify-center gap-[30px] items-center p-[100px_0px]'> 
        <h2>Explore more case studies</h2>

        <button className='text-white bg-blue-700 rounded-xl p-[10px_30px] '>View all case studies</button>
      </div>


      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        
      <img className='w-[80%] m-auto p-[100px_0px] ' src={img13} alt="" />
      </div>


      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='text-center'>

        <h1 className='text-3xl'>Flexible pricing plans</h1><br />
        <button className=' w-[150px] mr-[-35px] p-[10px_30px] bg-blue-700 text-white rounded-3xl'>Monthly</button>
        <button className='w-[150px] p-[10px_30px] border border-blue-700 text-blue-700 rounded-3xl'>Monthly</button>
       

        <div className='flex justify-around items-center p-[150px_0px] '>

          <div className='text- w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white hover:scale-3d  hover:transition-all '>
            <h3 className='text-[20px]'>Basic</h3> <br />
            <h1 className='text-5xl text-blue-700 '>$24 <span className='text-[15px]'>/mon</span> </h1> <br />
            <div className='text-start w-[80%] m-auto'>
              <p> ☑️ Advanced Analytics</p> <br />
              <p> ☑️ Change Management</p> <br />
              <p> ☑️ Corporate Finance</p> <br />
              <p> ☑️ One Way Link Building</p> <br />
              <p> ☑️ Social Media Marketing</p> <br />
              <p className='text-gray-600'> ❌ Strategy & Marketing</p> <br />
              <p className='text-gray-600'> ❌ Information Technology</p> <br />
            </div>
            <button className='border border-blue-700 text-blue-700 p-[20px_0px] w-[90%]  '>Choose plan</button>
          </div>

          <div className='text- w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white hover:scale-3d  hover:transition-all '>
            <h3 className='text-[20px]'>Basic</h3> <br />
            <h1 className='text-5xl text-blue-700 '>$24 <span className='text-[15px]'>/mon</span> </h1> <br />
            <div className='text-start w-[80%] m-auto'>
              <p> ☑️ Advanced Analytics</p> <br />
              <p> ☑️ Change Management</p> <br />
              <p> ☑️ Corporate Finance</p> <br />
              <p> ☑️ One Way Link Building</p> <br />
              <p> ☑️ Social Media Marketing</p> <br />
              <p className='text-gray-600'> ❌ Strategy & Marketing</p> <br />
              <p className='text-gray-600'> ❌ Information Technology</p> <br />
            </div>
            <button className='border border-blue-700 text-blue-700 p-[20px_0px] w-[90%]  '>Choose plan</button>
          </div>

          <div className='text- w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white hover:scale-3d  hover:transition-all '>
            <h3 className='text-[20px]'>Basic</h3> <br />
            <h1 className='text-5xl text-blue-700 '>$24 <span className='text-[15px]'>/mon</span> </h1> <br />
            <div className='text-start w-[80%] m-auto'>
              <p> ☑️ Advanced Analytics</p> <br />
              <p> ☑️ Change Management</p> <br />
              <p> ☑️ Corporate Finance</p> <br />
              <p> ☑️ One Way Link Building</p> <br />
              <p> ☑️ Social Media Marketing</p> <br />
              <p className='text-gray-600'> ❌ Strategy & Marketing</p> <br />
              <p className='text-gray-600'> ❌ Information Technology</p> <br />
            </div>
            <button className='border border-blue-700 text-blue-700 p-[20px_0px] w-[90%]  '>Choose plan</button>
          </div>

          
        </div>
      </div>

       <Swiper
        style={{
          '--swiper-navigation-color': 'blue',
          '--swiper-pagination-color': 'blue',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              Pulvinar neque pharetra arcu diam maecenas diam integer in.</p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img src={img14} alt="" />
              <div>
                <h2 className='text-xl'>Courtney Alexander</h2>
                <p className='text-gray-700'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              Pulvinar neque pharetra arcu diam maecenas diam integer in.</p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img src={img14} alt="" />
              <div>
                <h2 className='text-xl'>Courtney Alexander</h2>
                <p className='text-gray-700'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              Pulvinar neque pharetra arcu diam maecenas diam integer in.</p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img src={img14} alt="" />
              <div>
                <h2 className='text-xl'>Courtney Alexander</h2>
                <p className='text-gray-700'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              Pulvinar neque pharetra arcu diam maecenas diam integer in.</p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img src={img14} alt="" />
              <div>
                <h2 className='text-xl'>Courtney Alexander</h2>
                <p className='text-gray-700'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              Pulvinar neque pharetra arcu diam maecenas diam integer in.</p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img src={img14} alt="" />
              <div>
                <h2 className='text-xl'>Courtney Alexander</h2>
                <p className='text-gray-700'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' shadow-[0px_5px_10px_gray] rounded-xl p-[20px] '>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />
              tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br />
              </p> <br />
            
            <div className='flex items-center gap-[20px]'>
              <img className='w-20px'   src={img14} alt="" />
              <div>
                <h2 className='text-[15px]'>Courtney Alexander</h2>
                <p className='text-gray-700 text-[10px]'>Position, Company name</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        
       
      </Swiper>

      <br /><br /><br /><br /><br />


      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" className='flex justify-around items-start p-[100px_0px] '> 

        <div>
          <h1 className='text-2xl'>Latest news</h1>
          <br /> <p>Check more posts in our blog for <br /> featured news and advertising  <br />insights</p>
          <br /> 
          <button className='bg-blue-700 text-white p-[10px_30px] '>Go to blog</button>
        </div>
        <img src={img15} alt="" />
        <img src={img16} alt="" />
      </div>
    </>
  );
}

export default Servicies;
