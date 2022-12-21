import React from 'react'
import './customerLove.css';


import basicDog from"../images/basicDog.svg";
import guaranteeBadge from "../images/guaranteeBadge.svg";
const CustomerLove = () => {
  return (
    <>
    
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <div className='container-fluid basicDog-container '> 
   <div className='maindivimg'>
   <img className='basicDog ' src={basicDog} alt="" />
      
    <img className='guaranteeBadge' src={guaranteeBadge} alt="" />
    </div>
    <div className='text-center'>
    <h4 className='customerLove-D mb-0' >Customer Love Guarantee</h4>
    <h4 className='ourProfessional-D'>Our professional, dog-loving team is on hand to help with anything.</h4>
    </div>

    </div>

      </div>
      <div className="col-md-2"></div>
    </div>
   
    
    </>
  )
}

export default CustomerLove