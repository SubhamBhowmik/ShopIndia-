import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom"
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core';
//import { products } from '../../Constant/product.js';
const useStyle = makeStyles(theme => ({
  container: {
  },
  image: {
      width: '100%',
      height: 280,
      [theme.breakpoints.down('sm')]: {
          objectFit: 'cover',
          height: 180
      }
  }
}))


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,

  },
  mobile: {
    breakpoint: { max: 431, min: 0 },
    items: 1,
    
  }
};

const Slide = ({ products }) => {

  const classes = useStyle();
  return <>
    <Carousel responsive={responsive}
      swipeable={true}
      draggable={false}
      centerMode={false}
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      showDots={false}
          
       containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet","mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 70,
                }
            }}
    >

      {
        products.map((data) => {
          return <>

            <Link to={`product/${data.id}`} style={{ textDecoration: 'none' }}>
              <div textAlign="center" >
                <img src={data.url} style={{ height: "15vh", paddingTop: '5px', marginTop: "5px" }} />
                <p style={{ fontWeight: 600, color: '#212121' }}>{data.title.shortTitle}</p>
                <p style={{ color: 'green' }}>{data.discount}</p>
                <p style={{ color: '#212121', opacity: '.6' }}>{data.tagline}</p>
              </div>
            </Link>
          
          </>
        })
      }


    </Carousel>;
  </>;
};

export default Slide;
