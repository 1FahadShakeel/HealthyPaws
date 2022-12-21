import React from 'react'
import './reviewplan.css';




import pouch_with_sparks from '../images/pouch_with_sparks.svg';
import explodingBox from '../images/explodingBox.svg';
import calendarSimple from '../images/calendarSimple.svg';

import beef from '../images/beef.png';
import chicken from '../images/chicken.png';
import gobble from '../images/gobble.png';
import pork from '../images/pork.png';
import duckChicken from '../images/duckChicken.png';












const ReviewPlan = () => {


let introBoxHandler=()=>{


    document.getElementById("introBox").classList.remove("introBox");
    document.getElementById("introBox").classList.add("introBoxSelected");

    document.getElementById("afterIntro").classList.remove("afterIntroSelected");
    document.getElementById("afterIntro").classList.add("afterIntro");
    document.getElementById("promoSummery").classList.remove("d-none");
    document.getElementById("recipesBlockId").classList.remove("d-none");

     document.getElementById("recipesBlockId2").classList.add("d-none");


    document.getElementById("week2Heading").innerHTML="week2";


}

let afterIntro=()=>{
    
    document.getElementById("introBox").classList.add("introBox");
    document.getElementById("introBox").classList.remove("introBoxSelected");
    document.getElementById("afterIntro").classList.remove("afterIntro");
    document.getElementById("afterIntro").classList.add("afterIntroSelected");
    document.getElementById("promoSummery").classList.add("d-none");
    document.getElementById("recipesBlockId").classList.add("d-none");

    document.getElementById("recipesBlockId2").classList.remove("d-none");

    document.getElementById("week2Heading").innerHTML="week 3";


    
}

let HideRecipeHandler=()=>{
   let r = document.getElementById("recipeBlock").classList;
   if(r.contains("d-none")){
    r.remove("d-none");
    document.getElementById("recipeBtnId").innerHTML="Hide her recipe selection"
   }
   else{
    r.add("d-none");
    document.getElementById("recipeBtnId").innerHTML="See her recipe selection"

   }

    
}


  return (
    <>
    <div className='container-fluid'>
         <div className='row headerStep4 text-center py-5'>
            <div className="col-12">
            <span className='step px-1'>STEP 4/4</span>
        <h2 className='headingStep4 m-0 p-0'>Lastly, review her plan</h2>
        </div>
        </div>

<div className="row  px-2">
   <div className="col-md-3"></div>
   <div className="col-md-6  ">
    <div className='text-center my-3'>
        <button onClick={introBoxHandler} type="button" class="introBoxSelected" id='introBox'>Intro box</button>
        <button onClick={afterIntro} type="button " class="  afterIntro" id='afterIntro'>After intro</button>
        </div>

        <div className=' row py-2 shadow px-5  '>
            
<div id='weekbefore' className="col-12">
<h2 className='week2Heading' id='week2Heading'>2 weeks intro box</h2>
            <p id='week2Pera1' className='week2Pera1'>We’ll start slowly by sending you 2 weeks of meals to help with your pup’s transition. Easy.</p>
</div>


            
           
            <div className="col-12 ">
            <div className="row text-center ">
               
                    
                <div className=" col-4  p-0  ">
                    <img className='img1' src={pouch_with_sparks} alt="" />
                    <p className='imgPera m-0'>1 x 600g</p>
                    <p className='imgPera2'>daily serving</p>
                </div>
                <div className="col-4  p-0 ">
                <img src={explodingBox} alt="" />
                    <p className='imgPera m-0'>14</p>
                    <p className='imgPera2'>pouches per box</p>
                </div>
                <div className=" col-4 p-0  ">
                <img className='mb-3' src={calendarSimple} alt="" />
                    <p className='imgPera m-0'>2 weeks</p>
                    <p className='imgPera2'>worth of food</p>
                </div>
                
                
            </div>
            </div>

            {/*Replacemet block of Recipes block */}



            <div id='recipesBlockId2' className=" col-12">
                <p>
                We’ll give you a heads-up when your next box is nearly ready, so you’ve got time to tweak her meals if there’s one she particularly loves.
                </p>
            </div>

            

            {/* Recipes block */}
            <div id='recipesBlockId' className=''>
          
            <div id='recipeBlock' className='d-none'>

            <div className="col-12">
            <div className="row">
            

                <div className="col-4 ">

                    <h6 className='recipes'>Recipes</h6>
                </div>
                <div className="col-4"></div>

                <div className="col-4 ">
                    <h6 className='serving float-end'>14 servings</h6>
                </div>
            <div className="col-1"></div>

            </div>
            </div>


{/*Recipes img1 */}
   {/* img1 */}
   <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={beef} alt="" />
                                  <p className='myp'>Beef It Up</p>
                              </div>
                              <div >
                              <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img1 */}
            <hr/>

{/*Recipes img2 */}
           {/* img2 */}
           <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={chicken} alt="" />
                                  <p className='myp'>Chicken You Out</p>
                              </div>
                              <div >
                              <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img2 */}
            <hr/>

            {/*Recipes img3 */}
            {/* img3 */}
            <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={gobble} alt="" />
                                  <p className='myp'>Gobble Gobble Turkey</p>
                              </div>
                              <div >
                              <p className='imgDis mt-2 mb-0 pb-0'>2 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img3 */}
           <hr/>
            
            {/* img4 */}
            <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={pork} alt="" />
                                  <p className='myp'>Pork This Way</p>
                              </div>
                              <div >
                                  
                                  <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
            
{/* img4 */}

<hr/>
            {/* img5 */}
            <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={duckChicken} alt="" />
                                  <p className='myp'>Duo of Duck & Chicken</p>
                              </div>
                              <div >
                                  <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img5 */}

            </div>
<div className="col-12 my-3">
<button id='recipeBtnId' onClick={HideRecipeHandler}  type="button" class="btn btn-link">See her recipe selection
</button>
</div>

            </div>
           {/* resipi block end */}
<div className="col-12 text-center my-4">
  <span className='spanChange py-2 px-1'>You can change, pause or cancel her plan anytime.</span>
</div>


{/* promo summery div */}
<div id='promoSummery' className=''>

{/* refer */}
<div className="col-12">
    <h3>Referral or promo code?</h3>
    <div className='promoBorder py-2 '>
    <input placeholder='Sherlock Bones' type="text"  className='promoInput form-control w-75'/> 
    <button  type="button" className="btn btn-outline-danger  float-end">Apply</button>
    </div>
    
</div>



{/* Order summary */}
<div className="col-12 my-3">
<div className="row">
    <div className="col-6">
        <h4>Order summary</h4>
    </div>
    <div className="col-6">
        <span className='percentOff float-end'>15% off</span>
    </div>

</div>

</div>



{/* intro */}
<div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <h4 className=' summaryData mb-0 pb-0'>Intro price</h4>
                              </div>
                              <div >
                                  <del className='sumrypriceDel mx-2  mb-0 pb-0'>£3.92/day</del>
                                  <p className='sumryprice m-0 p-0 '>£3.33/day</p>
                              </div>
                           </div>
                 </div>
              </div>


{/* Naturally Tasty Lamb Treats*/}
<div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <h4 className=' summaryData mb-0 pb-0'>Naturally Tasty Lamb Treats</h4>
                              </div>
                              <div >
                                  <del className='sumrypriceDel mx-2  mb-0 pb-0'>£3.80 </del>
                                  <p className='sumryprice m-0 p-0 '>£3.23</p>
                              </div>
                           </div>
                 </div>
              </div>


{/*Delivery Fee*/}
<div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <h4 className=' summaryData mb-0 pb-0'>Naturally Tasty Lamb Treats</h4>
                              </div>
                              <div >
                                  <del className='sumrypriceDel mx-2  mb-0 pb-0'>£3.99 </del>
                                  <p className='sumryprice m-0 p-0 '>FREE</p>
                              </div>
                           </div>
                 </div>
              </div>

{/*Total savings*/}
<div className="col-12 my-3">
<div className="row py-2 totalSaving">
    <div className="col-6">
        <h5 className='totalSaving ' >Total savings</h5>
    </div>
    <div className="col-6">
       <span className=' float-end'>-£10.86</span>
    </div>
</div>
</div>


{/*Box Total */}
<div className="col-12 my-3">
<div className="row ">
    <div className="col-6">
        <h4>Box Total</h4>
    </div>
    <div className="col-6">
       <span className=' float-end'>£38.93</span>
    </div>
</div>
</div>

</div>




        </div>
   </div>
   <div className="col-md-3"></div> 
</div>
        
        

        </div>


        
            
           
        

        

        </>

        
  )
}

export default ReviewPlan