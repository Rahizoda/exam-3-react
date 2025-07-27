import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import img1 from "../assets/illustration (4).png";
import img2 from "../assets/illustration (5).png";
import img3 from "../assets/illustration (1).png";
import img4 from "../assets/illustration (6).png";
import img5 from "../assets/illustration (7).png";
import img6 from "../assets/illustration (2).png";
import img7 from "../assets/small (1).png"
import img8 from "../assets/small.png"
import img9 from "../assets/client-logo.png"
import img10 from "../assets/features.png"
import img11 from "../assets/features1122.png"
import img12 from "../assets/client-logo (1).png"
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

// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode,  Thumbs } from 'swiper/modules';


const CaseStudies = () => {
  return (
    <>
      <div data-aos="zoom-in-right" className="bg-[url(src/assets/background1.png)] bg-no-repeat text-white text-center p-[100px_0px]">
        <p>
          {" "}
          <HomeIcon /> Home{" "}
        </p>
        <br />
        <h1 className="text-4xl">Our services</h1> <br />
        <p>
          We offer more than services. Our agency provides solutions to your
          top-priority concerns, <br />
          involving customer targeting, email performance and sales growth. If
          there is no existing <br />
          solution readily available, we create one, specifically to suit your
          business.
        </p>{" "}
        <br />
        <br />
        <div className="flex items-center m-auto w-[300px]">
          <button className="text-white p-[10px_30px] border border-white ">
            Start now
          </button>
          <button className="ml-[30px] mt-[10px]">
            <PhoneAndroidIcon sx={{ color: "blue", marginRight: "20px" }} />{" "}
            Call us <br /> (405) 555-0128
          </button>
        </div>
      </div>

      <section data-aos="fade-up"
     data-aos-duration="3000" className="flex justify-around items-center gao-[40px] p-[150px_0px] ">
        <div>
          <div>
            <h1 className="text-3xl">Social Media Marketing</h1>
            <br />
            <p>
              Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
              lacus, turpis accumsan <br />
              gravida. Aliquet mattis dignissim massa sociis a, id bibendum.
              Egestas lorem eros, <br />
              mi cras amet, vel eget molestie. Turpis enim arcu, amet donec
              massa pellentesque <br />
              nulla duis. Arcu dictum metus sed purus senectus faucibus eget
              elementum <br />
              pretium.
            </p>{" "}
            <br />
            <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-[5px]">
              Learn more
            </button>
            <button className="p-[10px_30px] border bg-blue-700 ml-[20px] text-white rounded-[5px]">
              Try SEO toolkit
            </button>
          </div>

          <img className="w-[600px]" src={img1} alt="" />

          <div>
            <h1 className="text-3xl">Research Service</h1>
            <br />
            <p>
              Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet
              viverra in. Est nulla <br />
              lectus purus tincidunt massa tortor. Hendrerit vulputate elementum
              blandit massa <br />
              vitae amet felis eget.{" "}
            </p>{" "}
            <br />
            <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-[5px]">
              Learn more
            </button>
            <button className="p-[10px_30px] border bg-blue-700 ml-[20px] text-white rounded-[5px]">
              Try SEO toolkit
            </button>
          </div>

          <img className="w-[600px]" src={img2} alt="" />

          <div>
            <h1 className="text-3xl">Payed Traffic Management</h1>
            <br />
            <p>
              Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
              lacus, turpis accumsan <br />
              gravida. Aliquet mattis dignissim massa sociis a, id bibendum.
              Egestas lorem eros, <br />
              mi cras amet, vel eget molestie. Turpis enim arcu, amet donec
              massa pellentesque <br />
              nulla duis. Arcu dictum metus sed purus senectus faucibus eget
              elementum <br />
              pretium.
            </p>{" "}
            <br />
            <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-[5px]">
              Learn more
            </button>
            <button className="p-[10px_30px] border bg-blue-700 ml-[20px] text-white rounded-[5px]">
              Try SEO toolkit
            </button>
          </div>
        </div>

        <div>
          <img className="w-[600px]" src={img3} alt="" />

          <div>
            <h1 className="text-3xl">Search Engine Optimization</h1>
            <br />
            <p>
              Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
              lacus, turpis accumsan <br />
              gravida. Aliquet mattis dignissim massa sociis a, id bibendum.
              Egestas lorem eros, <br />
              mi cras amet, vel eget molestie. Turpis enim arcu, amet donec
              massa pellentesque <br />
              nulla duis. Arcu dictum metus sed purus senectus faucibus eget
              elementum <br />
              pretium.
            </p>{" "}
            <br />
            <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-[5px]">
              Learn more
            </button>
            <button className="p-[10px_30px] border bg-blue-700 ml-[20px] text-white rounded-[5px]">
              Try SEO toolkit
            </button>
          </div>

          <img className="w-[600px]" src={img4} alt="" />

          <div>
            <h1 className="text-3xl">Content & PR Service</h1>
            <br />
            <p>
              Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
              lacus, turpis accumsan <br />
              gravida. Aliquet mattis dignissim massa sociis a, id bibendum.
              Egestas lorem eros, <br />
              mi cras amet, vel eget molestie. Turpis enim arcu, amet donec
              massa pellentesque <br />
              nulla duis. Arcu dictum metus sed purus senectus faucibus eget
              elementum <br />
              pretium.
            </p>{" "}
            <br />
            <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-[5px]">
              Learn more
            </button>
            <button className="p-[10px_30px] border bg-blue-700 ml-[20px] text-white rounded-[5px]">
              Try SEO toolkit
            </button>
          </div>

          <img className="w-[600px]" src={img5} alt="" />
        </div>
      </section>

      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="bg-[#1E212C] text-white  flex p-[100px_0px] justify-around items-center ">
        <img src={img6} alt="" />
        <div>
          <h1 className="text-3xl">Get a Free SEO Analysis!</h1> <br />
          <TextField label="Name" variant="outlined" />
          <TextField
            sx={{ marginLeft: "20px" }}
            label="Username"
            variant="outlined"
          />{" "}
          <br /> <br />
          <TextField
            label="Email@gmail.com"
            fullWidth
            variant="outlined"
          />{" "}
          <br />
          <br />
          <div className="flex justify-between items-center">
            <span>
              ☑️ I agree to receive communications from <br /> Createx SEO
              Agency{" "}
            </span>{" "}
            <br />
            <button className="bg-blue-700 text-white p-[10px_30px] rounded-xl">
              Get a free analysis{" "}
            </button>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />

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
              <br /><br /><br /><br /><br />
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='flex justify-around items-start p-[100px_0px] '> 
      
              <div>
                <h1 className='text-2xl'>Latest news</h1>
                <br /> <p>Check more posts in our blog for <br /> featured news and advertising  <br />insights</p>
                <br /> 
                <button className='bg-blue-700 text-white p-[10px_30px] '>Go to blog</button>
              </div>
              <img src={img7} alt="" />
              <img src={img8} alt="" />
            </div>
    </>
  );
};

export default CaseStudies;
