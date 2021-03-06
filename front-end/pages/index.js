import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import Layout, {siteTitle} from "../component/Layout/Layout";



const useStyles = makeStyles({
  buttonRegister :{
    alignSelf:"center",
    background: "#FF7F94",
    color: "black",
    border: "1px solid black",
    borderRadius:"25px",
    boxShadow: "2px 5px 7px black", 
    padding : "0.5rem",
    margin: "1rem",
    width: "10rem"
  },
  buttonLogin: {
      alignSelf:"center",
      background: "#39DFE5",
      color: "black",
      border: "1px solid black",
      borderRadius:"25px",
      boxShadow: "2px 5px 7px black", 
      padding : "0.5rem",
      margin: "1rem",
      width: "10rem"
  },
  links : {
    color: "black",
    font : "1.2em 'Fira Sans', sans-serif"
  },
  sections:{
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: "100vh",
    margin: "20px auto 10px auto "

  },
  outerBox: {
    justifyContent: "center",
    display: "flex",
    flexDirection:"column"
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: "2rem",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    lineHeight: 1.5,
    fontSize: "1.5rem",
  },

});

export default function Index() {

  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

    <Box className={classes.outerBox}>  
      <Container className={classes.sections}>
          
          <Image
            src="/images/skyline.png"
            height={540}
            width={1000}
            alt="Skyline vectorial image"
          />
          
        </Container>
        <Container>
          <Box className={classes.title}>Geo-Clustering tool</Box>
          <Box className={classes.description}>- Reserved area - </Box>
        </Container>
        
    </Box>
    </Layout>
  );
}