import React from 'react';
import Carousel from "react-material-ui-carousel"
import {bannerData} from "../../Constant/NavData"
import "./banner.css"
import { makeStyles } from '@material-ui/core';

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

const Banner = () => {
    const classes = useStyle();
  return <>
  <div className="wrpp">
  <Carousel 
 autoPlay={true}
 indicators={false}
 navButtonsAlwaysVisible={true}
 animation='slide'
 className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
 >
            {
                bannerData.map( (data)=>{
                 return<>
                   
                     <img className={classes.image} alt='' src={data.url} />
                 </>
                })
            }
        </Carousel>
  </div>


  </>;
};

export default Banner;
