import React from 'react';
import './Age.css';
import DoctorDescription from '../../images/DoctorDescription.PNG';
import FreshFact3 from '../../images/FreshFact3.PNG';
import { NavLink } from "react-router-dom";

const Validation = Event => {
  if((document.getElementById("PuppyInput1").value == "" || document.getElementById("PuppyInput2").value == "") ||
  (parseFloat(document.getElementById("PuppyInput1").value) > 12 || parseFloat(document.getElementById("PuppyInput2").value > 4)))
  {
    
        Event.preventDefault();
        document.getElementById("PuppyInput1").classList.add("is-invalid");
        document.getElementById("PuppyInput2").classList.add("is-invalid");
  }
  else{
    document.getElementById("PuppyInput1").classList.add("is-valid");
    document.getElementById("PuppyInput2").classList.add("is-valid");
    localStorage.setItem("1stInputBox", document.getElementById("PuppyInput1").value);
    localStorage.setItem("2ndInputBox", document.getElementById("PuppyInput2").value);
  }
}
const ShowInputs = Event =>{
  document.getElementById("PuppyInput1").classList.remove("is-invalid");
  document.getElementById("PuppyInput2").classList.remove("is-invalid");
}

function PuppyFunction(){
  localStorage.setItem("dogType", "puppy")
  document.getElementById("Show").classList.add("d-none");
  document.getElementById("Show2").classList.add("d-none");

  document.getElementById("PuppyAge1").innerHTML = "months";
  document.getElementById("PuppyAge2").innerHTML = "weeks";
  document.getElementById("PuppyBtn").classList.add("PuppyButton");
  document.getElementById("AdultPuppyBtn").classList.add("AdultPuppyButton");
  document.getElementById("SeniorPuppyBtn").classList.add("SeniorPuppyButton");
  
  document.getElementById("PuppyBtn").classList.remove("PuppyButton2");
  document.getElementById("AdultPuppyBtn").classList.remove("AdultPuppyButton2");
  document.getElementById("SeniorPuppyBtn").classList.remove("SeniorPuppyButton2");
}
function AdultPuppyFunction(){
  
  localStorage.setItem("dogType", "adultPuppy")
  document.getElementById("Show").classList.remove("d-none");
  document.getElementById("Show2").classList.remove("d-none");

  document.getElementById("PuppyAge1").innerHTML = "years";
  document.getElementById("PuppyAge2").innerHTML = "months";
  
  document.getElementById("PuppyBtn").classList.add("PuppyButton2");
  document.getElementById("AdultPuppyBtn").classList.add("AdultPuppyButton2");
  document.getElementById("SeniorPuppyBtn").classList.add("SeniorPuppyButton");
  
  document.getElementById("PuppyBtn").classList.remove("PuppyButton");
  document.getElementById("AdultPuppyBtn").classList.remove("AdultPuppyButton");
  document.getElementById("SeniorPuppyBtn").classList.remove("SeniorPuppyButton2");
}
function SeniorPuppyFunction(){
  localStorage.setItem("dogType", "seniorPuppy")
  document.getElementById("Show").classList.remove("d-none");
  document.getElementById("Show2").classList.remove("d-none");

  document.getElementById("PuppyAge1").innerHTML = "years";
  document.getElementById("PuppyAge2").innerHTML = "months";
  
  document.getElementById("PuppyBtn").classList.add("PuppyButton2");
  document.getElementById("AdultPuppyBtn").classList.add("AdultPuppyButton");
  document.getElementById("SeniorPuppyBtn").classList.add("SeniorPuppyButton2");
  
  document.getElementById("PuppyBtn").classList.remove("PuppyButton");
  document.getElementById("AdultPuppyBtn").classList.remove("AdultPuppyButton2");
  document.getElementById("SeniorPuppyBtn").classList.remove("SeniorPuppyButton");
}

function Age() {
  return (
    <div class="container-fluid">

      {/* header */}
      <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h3 className='text-center headerHeading'>How old is <span>{localStorage.getItem("dogName")}</span>?</h3>
        </div>
        <div className="col-md-2"></div>
      </div>

      {/* Dog Name */}
      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <p id="Header">-----------<span>{localStorage.getItem("dogName")}</span> is.-----------</p>
        </div>
      </div>

      {/* Dog Type Buttons */}
      <div class="row mt-3">
          <div class="col-md-12 text-center">
            <button id="PuppyBtn" class="PuppyButton" onClick={PuppyFunction}>A puppy</button>
            <button id="AdultPuppyBtn" class="AdultPuppyButton mx-3" onClick={AdultPuppyFunction}>An adult</button>
            <button id="SeniorPuppyBtn" class="SeniorPuppyButton" onClick={SeniorPuppyFunction}>A senior</button>
          </div>
      </div>

      {/* Age Input Boxes */}
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <input class="form-control text-center " 
          placeholder='0' 
          type="number"
          id="PuppyInput1"
          onFocus={ShowInputs}/>
          <label id="PuppyAge1"> months</label>
          <input class="form-control text-center" 
          placeholder='0'
          type="number"
          id="PuppyInput2"
          onFocus={ShowInputs}/>
          <label id="PuppyAge2"> weeks</label>
        </div>
      </div>

      {/* Checkbox */}
      <div class="row mt-5 d-none" id="Show">
        <div class="col-md-12 text-center">
          <label id="CheckBoxText">
            <input type="checkbox" id="CheckBox"/>
          I haven't brought him home yet. Soon, very soon.
          </label>
        </div>
      </div>

      {/* Doctors Message */}
      <div class="row mt-5 d-none" id="Show2">
        <div class="col-md-12 text-center">
          <img id="DocDesc" src={DoctorDescription} />
        </div>
      </div> 

      
      
      {/* Fresh Fact */}
      <div class="row mt-5"></div>
      <div class="row mt-2"></div>
      <div className="row freshRow mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact3} alt="" />
          <p className="p2  ">We feed over <b>10,000 puppies</b> and counting here at Butternut Box, so we know a thing or two 
              about growing pups. Can't help with the toilet training, though - best of luck with that.</p>
        </div>
        <div className="col-md-3"></div>

       </div>


      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Gender' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/Breed'  type="button" className="btn  float-end continue py-2" onClick={Validation}>CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>

    </div>    
  )
}

export default Age