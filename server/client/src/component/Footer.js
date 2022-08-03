import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6 style={{marginLeft:"5px"}}>About</h6>
              <p class="text-justify">ShopIndia is a non-profit organisation that aims to promote quality education for all.
              </p>
              <p>ShopIndia is register under Act No. 21 of 1860 in Pune Charity Commissioner office. Reg. No. MH/994/2021/Pune.</p>
            </div>
  
            <div class=" col-xs-6 col-md-3 d-flex flex-column bd-highlight mb-3">
              <h6>Quick Links</h6>
              <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            
            <i className="icon-up-open"></i>
            </div>
          </div>
          <hr />
        </div>
    
       <a class="smoothscroll" href='#'>
       <i class="fas fa-arrow-up d-flex justify-content-center"></i>
       </a>
        



        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
            <a className="smoothscroll" title="Back to Top" href="#home"/>
              <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
               <a href="#">ShopIndia</a>
               
              </p>
            </div>
          
          </div>
        </div>
  </footer>
          )
        }
        
export default Footer