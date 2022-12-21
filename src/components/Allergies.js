import React, { useEffect } from 'react';
import './Allergies.css';
import FreshFact4 from '../images/FreshFact4.PNG';
import { NavLink } from "react-router-dom";

function AllergiesDiv(){
    let Option = document.getElementById("AllergyRow").classList;
    if(Option.contains("d-none"))
    {
        Option.remove("d-none");
    }
    else{
        Option.add("d-none");
    }
}


function Allergies() {
  return (
    <div class="container-fluid">
       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Are you aware of any allergies?</h3>
        <p className='headerPera1 text-center'>Even though our meals are hypoallergenic with no added wheat, maize, soy or mystery ingredients, we like to make sure all recipes are right for your pooch</p>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}




      {/* Dog Name */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <p id="Header">----------<span>{localStorage.getItem("dogName")}</span> is alergic to.----------</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      {/* Allergies Name */}
      <div class="row mt-3" id="AllergyRow">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
        <ul class="ks-cboxtags SpinOption">
                <li>
                    <input type="checkbox" id="checkboxOne" value="Nothing" />
                    <label id="labelOne" for="checkboxOne">Nothing</label>
                </li>

                <li id="Shapaik">
                    <input type="checkbox" id="checkboxTwo" value="Beef" />
                    <label for="checkboxTwo">Beef</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxThree" value="Fish" />
                    <label for="checkboxThree">Fish</label>
                </li>
                
                <li>
                    <input type="checkbox" id="checkboxFour" value="Duck"/>
                    <label for="checkboxFour">Duck</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxFive" value="Pork"/>
                    <label for="checkboxFive">Pork</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxSix" value="Chicken" />
                    <label for="checkboxSix">Chicken</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxSeven" value="Turkey" />
                    <label for="checkboxSeven">Turkey</label>
                </li>
                
                <li>
                    <input type="checkbox" id="checkboxEight" value="Lamb"/>
                    <label for="checkboxEight">Lamb</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxNine" value="Wild Boar"/>
                    <label for="checkboxNine">Wild Boar</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxTen" value="Guinea Fowl" />
                    <label for="checkboxTen">Guinea Fowl</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxEleven" value="Vension" />
                    <label for="checkboxEleven">Vension</label>
                </li>
            </ul>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Checkbox */}
      <div class="row mt-3 mb-5">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <input type="checkbox" id="AllergyCheckBox" onClick={AllergiesDiv} />
          <label id="AllergyBoxText">I'm not sure yet</label>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Fresh Fact */}
      {/* <div class="row mt-5" id="FreshFact">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-10">
              <h3><b>Fresh Fact</b></h3>
            </div>
            <div class="col-md-2">
              <img id="FreshFact4" src={FreshFact4} />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>Having allergies shouldn't stop your dog from enjoying a fresh diet, so we tailor 
                your selection to suit your pup's needs. In fact, we feed over 35,000 dogs with allergies.</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div> */}
      <div className="row freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact4} alt="" />
          <p className="p2  ">Having allergies shouldn't stop your dog from enjoying a fresh diet, so we tailor 
                your selection to suit your pup's needs. In fact, we feed over 35,000 dogs with allergies.</p>
        </div>
        <div className="col-md-3"></div>

       </div>
      
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Activity' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink onClick={""} to='/health-issues'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  );
}

export default Allergies