import React from "react";
import { ApiImage } from "../config/api";
import Cards from "./Card";
import * as Yup from 'yup';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styletodoSwiper.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

 
 
  

const Sync = ({ data , PostData , DeleteData , EditData}) => {

    const [open, setOpen] = React.useState(false);
     const handleChangefile = (event) => {
    formik.setFieldValue("Images", event.target.files[0]);
  };
   const SignupSchema = Yup.object().shape({
   Name: Yup.string()
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     Description: Yup.string()
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });
    
    const formik = useFormik({
    initialValues: {
      Name: "",
      Description: "",
      Images: "",
        },
         validationSchema:SignupSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("Name", values.Name);
      formData.append("Description", values.Description);
      formData.append("Images", values.Images);

       PostData(formData)
        resetForm()
        handleClose()
    },
  });
    
    
     
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let Img = "";
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
              
      >
        <Box sx={{ ...style, width: 500 }}>
              <form onSubmit={formik.handleSubmit}>
            <TextField
              onChange={handleChangefile}
              type="file"
              name="images"
              label="Images"
              variant="outlined"
              fullWidth
              margin="normal"
              onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name }
            />
            <TextField
              onChange={formik.handleChange}
              value={formik.values.Name}
              name="Name"
              label="Name"
              variant="outlined"
                fullWidth
                margin="normal"
                onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name }
            />
            <TextField
              onChange={formik.handleChange}
              value={formik.values.Description}
              name="Description"
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name }
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button type="button" sx={{border:"1px solid blue", marginLeft:"20px"}} onClick={handleClose}>
              Chenel
            </Button>
          </form>
        </Box>
      </Modal>

      <div className="flex items-center justify-around">
        <h1 className="text-5xl "> List Users 📃</h1>

        <button className="btn" onClick={handleOpen}>
          <svg
            height="24"
            width="24"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            className="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
            <span className="text-white"> ADD USER</span>
          
        </button>
      </div>
      <div className="flex flex-wrap justify-center  m-auto gap-[30px] p-[100px_0px] items-center">
        {data.map((item, index) => {
          {
            item.images?.map((image, index) => {
              return (
                <img
                  className="w-[200px] h-[20px]  "
                  key={index}
                  src={
                    item.images
                      ? `${ApiImage}/${image.imageName}`
                      : "https://www.truckeradvisor.com/media/uploads/profilePics/notFound.jpg"
                  }
                  />
              );
            });
          }
          return (
            <Cards name={item.name} index={index} Img={Img} id={item.id} DeleteData={DeleteData} item={item} EditData={EditData}  />
          );
        })}
      </div>
    </>
  );
};

export default Sync;
