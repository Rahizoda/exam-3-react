import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, TextField } from "@mui/material";

import img1 from "../assets/Clients.png";
import img2 from "../assets/image (2).png";
import img3 from "../assets/line.png";
import img4 from "../assets/Clients.png";
import img6 from "../assets/illustration (1).png";

import img9 from "../assets/client-logo.png";
import img10 from "../assets/features.png";
import img11 from "../assets/features1122.png";
import img12 from "../assets/client-logo (1).png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Async from "../todoList/Async";

const AboutUs = () => {
  return (
    <>
      <div data-aos="fade-right" className="bg-[url(./src/assets/backgroundqwertyu.png)] bg-no-repeat text-white text-center p-[100px_0px]">
        <p>
          {" "}
          <HomeIcon /> Services Search Engine Optimization
        </p>
        <br />
        <h1 className="text-4xl font-bold">Search Engine Optimization</h1>{" "}
        <br />
        <p>
          Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui
          pellentesque enim integer <br />
          facilisi. Ultrices vitae tempor amet nec euismod non.
        </p>{" "}
        <br />
        <br />
        <div className="flex items-center  m-auto w-[520px]">
          <TextField
            variant="outlined"
            sx={{ width: "350px" }}
            label="Your wibsite URL"
          />
          <button className="p-[15px_30px] bg-blue-700 text-white ">
            Analyse your site
          </button>
        </div>
      </div>
      <div data-aos="flip-right" className="p-[100px_0px]">
        <img className="w-[80%] m-auto p-[30px]" src={img1} alt="" />
      </div>
      <div data-aos="flip-up" className="flex justify-around items-start p-[100px_0px]">
        <img className="w-[600px]" src={img2} alt="" />

        <div>
          <h1 className="text-3xl font-bold">
            We go above and <br />
            beyond to ensure <br />
            successful SEO
          </h1>{" "}
          <br />
          <p>
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat <br />
            montes, viverra ullamcorper mi dui, nulla pharetra. <br />
            Sapien urna nullam elit diam mauris orci. Volutpat quam <br />
            tempus justo, aliquam. Tortor ultrices mattis eget orci <br />
            eu nisi sed augue odio. Et senectus risus, pharetra, <br />
            tristique libero. Dolor risus ac quam dictum mattis <br />
            ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis <br />
            et quis hendrerit. Cras at ac magna ultricies orci.
          </p>
        </div>
      </div>
      <section data-aos="zoom-in" className="  ">
        
        <Async />
      </section>
      <div  data-aos="zoom-in-down" className="text-center bg-[#7772F1] text-white p-[100px_0px] ">
        <h1 className="text-3xl font-bold">Get a Free SEO Analysis!</h1> <br />
        <br />
        <br />
        <br />
        <div className="flex gap-[20px] w-[1200px] m-auto">
          <TextField
            variant="outlined"
            label="Your Name"
            sx={{ width: "300px", backgroundColor: "white", color: "black" }}
          />
          <TextField
            variant="outlined"
            label="Your working email"
            sx={{ width: "300px", backgroundColor: "white" }}
          />
          <TextField
            variant="outlined"
            label="Your website URL"
            sx={{ width: "300px", backgroundColor: "white" }}
          />
          <Button
            sx={{ background: "black", color: "white", padding: "15px 30px" }}
          >
            {" "}
            Analyse your site
          </Button>
        </div>
      </div>
      <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex justify-center items-start gap-[60px] p-[150px_0px]">
        <section>
          <div className="p-[20px] text-end mt-[120px]">
            <h2 className="text-gray-700">STEP 2</h2>
            <br />
            <h2 className="text-2xl ">Technical SEO Optimizations</h2> <br />
            <p>
              Facilisis pellentesque quis accumsan ultricies. Eu <br />
              egestas eget feugiat lacus, amet, sollicitudin egestas <br />
              laoreet etiam. Nunc nisl orci auctor et fames. <br />
              Vestibulum viverra faucibus faucibus et convallis.
            </p>
          </div>

          <div className="p-[20px] text-end mt-[100px]">
            <h2 className="text-gray-700">STEP 4</h2>
            <br />
            <h2 className="text-2xl">Content Marketing</h2> <br />
            <p>
              Non tempor pulvinar tincidunt aliquam. Placerat <br />
              ultricies malesuada dui auctor. Faucibus in leo, nulla <br />
              odio nulla imperdiet quis faucibus neque..
            </p>
          </div>
        </section>

        <img src={img3} alt="" />

        <section>
          <div>
            <h2 className="text-gray-700">STEP 1</h2>
            <br />
            <h2 className="text-2xl">Off-Site SEO Analysis</h2> <br />
            <p>
              Aliquam turpis viverra quam sit interdum blandit <br />
              posuere pellentesque. Nisl, imperdiet gravida massa <br />
              neque..
            </p>
          </div>

          <div className="p-[20px] text-start mt-[130px]">
            <h2 className="text-gray-700">STEP 3</h2>
            <br />
            <h2 className="text-2xl">Usability Check</h2> <br />
            <p>
              Eget amet, enim pharetra leo egestas nisi, odio <br />
              imperdiet facilisis. Aliquet orci varius volutpat <br />
              egestas facilisi lobortis. Varius praesent pretium in <br />
              leo, accumsan, in ultricies.{" "}
            </p>
          </div>
        </section>
      </div>
      <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-center">
        <h1 className="text-3xl">Flexible pricing plans</h1>
        <br />
        <button className=" w-[150px] mr-[-35px] p-[10px_30px] bg-blue-700 text-white rounded-3xl">
          Monthly
        </button>
        <button className="w-[150px] p-[10px_30px] border border-blue-700 text-blue-700 rounded-3xl">
          Monthly
        </button>

        <div className="flex justify-around items-center p-[150px_0px] ">
          <div className="text- w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white hover:scale-3d  hover:transition-all ">
            <h3 className="text-[20px]">Basic</h3> <br />
            <h1 className="text-5xl text-blue-700 ">
              $24 <span className="text-[15px]">/mon</span>{" "}
            </h1>{" "}
            <br />
            <div className="text-start w-[80%] m-auto">
              <p> ☑️ Advanced Analytics</p> <br />
              <p> ☑️ Change Management</p> <br />
              <p> ☑️ Corporate Finance</p> <br />
              <p> ☑️ One Way Link Building</p> <br />
              <p> ☑️ Social Media Marketing</p> <br />
              <p className="text-gray-600"> ❌ Strategy & Marketing</p> <br />
              <p className="text-gray-600"> ❌ Information Technology</p> <br />
            </div>
            <Button
              sx={{ backgroundColor: "skyblue" }}
              className="border border-blue-700 text-blue-700 p-[20px_0px] w-[90%]  "
            >
              Choose plan
            </Button>
          </div>

          <div className="text- w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white hover:scale-3d  hover:transition-all ">
            <h3 className="text-[20px]">Optimal</h3> <br />
            <h1 className="text-5xl text-blue-700 ">
              $64 <span className="text-[15px]">/mon</span>{" "}
            </h1>{" "}
            <br />
            <div className="text-start w-[80%] m-auto">
              <p> ☑️ Advanced Analytics</p> <br />
              <p> ☑️ Change Management</p> <br />
              <p> ☑️ Corporate Finance</p> <br />
              <p> ☑️ One Way Link Building</p> <br />
              <p> ☑️ Social Media Marketing</p> <br />
              <p> ☑️ Strategy & Marketing</p> <br />
              <p className="text-gray-600"> ❌ Information Technology</p> <br />
            </div>
            <Button
              sx={{ backgroundColor: "skyblue" }}
              className="border border-blue-700 text-blue-700 p-[20px_0px] w-[90%]  "
            >
              Choose plan
            </Button>
          </div>

          <div className="text- w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white hover:scale-3d  hover:transition-all ">
            <h3 className="text-[20px]">Premium</h3> <br />
            <h1 className="text-5xl text-blue-700 ">
              $94 <span className="text-[15px]">/mon</span>{" "}
            </h1>{" "}
            <br />
            <div className="text-start w-[80%] m-auto">
              <p> ☑️ Advanced Analytics</p> <br />
              <p> ☑️ Change Management</p> <br />
              <p> ☑️ Corporate Finance</p> <br />
              <p> ☑️ One Way Link Building</p> <br />
              <p> ☑️ Social Media Marketing</p> <br />
              <p> ☑️ Strategy & Marketing</p> <br />
              <p> ☑️ Information Technology</p> <br />
            </div>
            <Button
              sx={{ backgroundColor: "skyblue" }}
              className="border border-blue-700 text-blue-700 p-[20px_0px] w-[90%]  "
            >
              Choose plan
            </Button>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center mb-[50px] ">
        Read our clients' case studies
      </h1>
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
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img9} alt="" />
            <br />
            <h2 className="text-xl">Charity organisation</h2> <br />
            <p className="text-gray-500">
              Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.
            </p>{" "}
            <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] bg-[url(.src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ">
            <div className="bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] ">
              <img src={img9} alt="" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <img src={img11} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img12} alt="" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img9} alt="" />
            <br />
            <h2 className="text-xl">Charity organisation</h2> <br />
            <p className="text-gray-500">
              Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.
            </p>{" "}
            <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] bg-[url(src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ">
            <div className="bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] ">
              <img src={img9} alt="" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <img src={img11} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img12} alt="" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img9} alt="" />
            <br />
            <h2 className="text-xl">Charity organisation</h2> <br />
            <p className="text-gray-500">
              Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.
            </p>{" "}
            <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] bg-[url(src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ">
            <div className="bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] ">
              <img src={img9} alt="" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <img src={img11} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img12} alt="" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img9} alt="" />
            <br />
            <h2 className="text-xl">Charity organisation</h2> <br />
            <p className="text-gray-500">
              Createx SEO Agency helped National Inc. <br />
              increase their MQL to SQL conversion rate <br />
              by 300%.
            </p>{" "}
            <br />
            <img src={img10} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] bg-[url(src/assets/image1122.png)] bg-no-repeat h-[300px] border border-gray-500 shadow-2xs ">
            <div className="bg-[#1e212c9d] w-[100%] h-[100%] p-[20px] ">
              <img src={img9} alt="" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <img src={img11} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] border border-gray-500 shadow-2xs  p-[20px]">
            <img className="w-[70px]" src={img12} alt="" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={img10} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>{" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="p-[100px_0px]">
        <img className="w-[80%] m-auto p-[30px]" src={img4} alt="" />
      </div>
      <div data-aos="fade-down-left" className="text-center p-[50px_0px] ">
        <h1 className="text-3xl">Our services</h1> <br />
        <div className="flex justify-between w-[80%]  m-auto">
          <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-xl ">
            Social Media
          </button>
          <button className="p-[10px_30px]  ">SEO</button>
          <button className="p-[10px_30px]  ">Research</button>
          <button className="p-[10px_30px]  ">Content & PR</button>
          <button className="p-[10px_30px]  ">Payed Traffic</button>
        </div>
      </div>
      <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="flex bg-white text-black dark:bg-[#1E212C] dark:text-white   justify-around items-center p-[100px_0px]">
        <div>
          <h1 className="text-3xl">
            Complete Worflow For Any <br /> SEO Professional
          </h1>{" "}
          <br />
          <p>☑️ Aenean enim tellus morbi nisl vulputate dictumst.</p>
          <p>☑️ Nibh sapien volutpat lacus augue.</p>
          <p>☑️ Vel in amet, placerat adipiscing est pharetra.</p>
          <p>☑️ Gravida ornare sit in et ut sit sem id.</p>
          <p>☑️ Ultrices pellentesque dictum enim egestas ac diam.</p>
          <p>☑️ Sit semper enim senectus integer ut turpis et.</p> <br />
          <br />
          <button className="p-[10px_30px] border border-blue-700 text-blue-700 rounded-xl ">
            Social Media
          </button>
          <button className="p-[10px_30px] border ml-[20px] border-blue-700 text-white bg-blue-700 rounded-xl ">
            Social Media
          </button>
        </div>

        <img className="w-[550px]" src={img6} alt="" />
      </div>
    </>
  );
};

export default AboutUs;
