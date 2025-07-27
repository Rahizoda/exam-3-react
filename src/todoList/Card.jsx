import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Api, ApiImage } from "../config/api";
import { Link } from "react-router-dom";
import "../pages/style.css" 
import * as Yup from 'yup';


import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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


import React, {  useEffect, useState } from "react";
import axios from "axios";

export default function Cards({ name, Img, id, DeleteData, item, EditData }) {
  
  const [user, setUser] = useState([])
  const [idx, setIdx] = useState([])
  
  async function Getbyid(idx) {
    try {
      const { data } = await axios.get(`${Api}/${idx}`)
      setUser(data.data)
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (idx) {
      const fetchData = async () => {
        await Getbyid(idx);
      };
      fetchData();
    }
  }, [idx])


  

     const [open, setOpen] = React.useState(false);
    // const handleChangefile = (event) => {
    //   formik.setFieldValue("Images", event.target.files[0]);
    // };
     const SignupSchema = Yup.object().shape({
     Name: Yup.string()
       .min(4, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
       Description: Yup.string()
       .min(5, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
   });
      
      const formik = useFormik({
      initialValues: {
  Name: user?.name || "",
  Description: user?.description || "",
  Id: user?.id || null,
} ,
          enableReinitialize: true,
           validationSchema:SignupSchema,
        onSubmit: (values) => {
        
        const formData = new FormData();
        formData.append("Name", values.Name);
        formData.append("Description", values.Description);
        formData.append("Id" , values.Id);
        
        EditData( formData)
        console.log(formData);
        
          handleClose()
      },
    });
      
      
       
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
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
              type="file"
              name="images"
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

    <Card
      sx={{
        maxWidth: 450,
        height:"550px", 
        border: "2px solid blue",
        padding: "10px",
        boxShadow: "5px 10px blue",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Link to={`/user/${id}`}>
        <CardActionArea>
            <CardMedia
              sx={{height:"200px", borderRadius:"20px"}}
            component="img"
            height="200px"
            image={Img.props.src}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        
        <Button onClick={()=> DeleteData(item.id)} sx={{backgroundColor:"red", color:"white", padding:"15px 30px"}} >BELETE</Button>
          <div className="container" onClick={() => {
            setIdx(item.id)
            handleOpen()
          }} >
          <a href="#" className="button type--C">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">EDIT</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>

      </CardActions>
    </Card>
    </>
  );
}
