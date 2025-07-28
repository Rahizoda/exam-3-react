import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, ApiImage } from "../config/api";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import "./style.css";

import img1 from "../assets/Article.png";
import img2 from "../assets/Sidebar.png";

const User = () => {
  const [user, setUser] = useState(null); // ✅ аввал null, на []
  const { id } = useParams();

  async function GetUserById() {
    try {
      const { data } = await axios.get(`${Api}/${id}`);
      setUser(data.data); // ✅ user object expected
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetUserById();
  }, []);

  if (!user) {
    return <div className="text-center text-2xl mt-10">Loading...</div>; // ✅ loading indicator
  }

  return (
    <>
      <Link to="/aboutus">
        <button className="Btn absolute top-[100px] left-[20px]">
          <div className="sign">
            <LogoutIcon/>
          </div>
          <div className="text">  Go to Back</div>
        </button>
      </Link>

      <div data-aos="flip-up" className="w-[80%] mt-[100px] rounded-2xl text-center shadow-[5px_10px_gray] m-[100px_auto] text-3xl">
        <div className="flex justify-around flex-wrap items-center">
          {user.images?.length > 0 ? (
            user.images.map((image, index) => (
              <img
                key={index}
                src={`${ApiImage}/${image.imageName}`}
                className="w-[300px] h-[300px] m-auto"
                alt={`user-image-${index}`}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <h1>
          <span className="text-blue-900">Name:</span> {user.name}
        </h1>
        <p>
          <span className="text-blue-900">Description:</span>{" "}
          {user.description}
        </p>
      </div>

      {/* Static content (images and pricing) */}
      <div data-aos="zoom-in-up" className="flex justify-around items-start p-[100px_0px]">
        <img src={img1} alt="Article visual" />
        <img src={img2} alt="Sidebar visual" />
      </div>

      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-center">
        <h1 className="text-3xl">Flexible pricing plans</h1>
        <br />
        <button className="w-[150px] mr-[-35px] p-[10px_30px] bg-blue-700 text-white rounded-3xl">
          Monthly
        </button>
        <button className="w-[150px] p-[10px_30px] border border-blue-700 text-blue-700 rounded-3xl">
          Monthly
        </button>

        {/* Pricing Cards */}
        <div className="flex justify-around items-center p-[150px_0px]">
          {/* Basic Plan */}
          <div className="w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white">
            <h3 className="text-[20px]">Basic</h3>
            <h1 className="text-5xl text-blue-700">
              $24 <span className="text-[15px]">/mon</span>
            </h1>
            <div className="text-start w-[80%] m-auto">
              <p>☑️ Advanced Analytics</p>
              <p>☑️ Change Management</p>
              <p>☑️ Corporate Finance</p>
              <p>☑️ One Way Link Building</p>
              <p>☑️ Social Media Marketing</p>
              <p className="text-gray-600">❌ Strategy & Marketing</p>
              <p className="text-gray-600">❌ Information Technology</p>
            </div>
            <Button sx={{ backgroundColor: "skyblue" }} className="w-[90%] mt-3">
              Choose plan
            </Button>
          </div>

          {/* Optimal Plan */}
          <div className="w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white">
            <h3 className="text-[20px]">Optimal</h3>
            <h1 className="text-5xl text-blue-700">
              $64 <span className="text-[15px]">/mon</span>
            </h1>
            <div className="text-start w-[80%] m-auto">
              <p>☑️ Advanced Analytics</p>
              <p>☑️ Change Management</p>
              <p>☑️ Corporate Finance</p>
              <p>☑️ One Way Link Building</p>
              <p>☑️ Social Media Marketing</p>
              <p>☑️ Strategy & Marketing</p>
              <p className="text-gray-600">❌ Information Technology</p>
            </div>
            <Button sx={{ backgroundColor: "skyblue" }} className="w-[90%] mt-3">
              Choose plan
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="w-[25%] transition-transform duration-300 hover:scale-110 p-[20px] border border-blue-600 rounded-2xl text-center hover:bg-[#1E212C] hover:text-white">
            <h3 className="text-[20px]">Premium</h3>
            <h1 className="text-5xl text-blue-700">
              $94 <span className="text-[15px]">/mon</span>
            </h1>
            <div className="text-start w-[80%] m-auto">
              <p>☑️ Advanced Analytics</p>
              <p>☑️ Change Management</p>
              <p>☑️ Corporate Finance</p>
              <p>☑️ One Way Link Building</p>
              <p>☑️ Social Media Marketing</p>
              <p>☑️ Strategy & Marketing</p>
              <p>☑️ Information Technology</p>
            </div>
            <Button sx={{ backgroundColor: "skyblue" }} className="w-[90%] mt-3">
              Choose plan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
