import React from 'react';
import { navData } from '../../Constant/NavData';
import "./Navbar.css"
const Navbar = () => {
  return <>
     <div className="containerr-">

     {
         navData.map((data)=>{
             return <>
             <div className="itemscontainer">
               
               <img src={data.url} width={100} alt="" />
               <p>{data.text}</p>
           </div>
             </>
          
           
         })
     }
     
          
     </div>
  </>;
};

export default Navbar;
