import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import carrot from "../../images/carrot.svg";
import './dogName.css'
// import deleteIcon from "./deleteIcon.svg";

const Validation = Event => {

  var letters = /^[A-Za-z]+$/;
  if(document.getElementById("dogName1Id").value.match(letters) && document.getElementById("dogName1Id").value != "" 
  && document.getElementById("dogName1Id").value.length <=20 )
  {
    document.getElementById("dogName1Id").classList.add("is-valid");
    localStorage.setItem("dogName", document.getElementById("dogName1Id").value)    
  }
  else{
    Event.preventDefault();
    document.getElementById("dogName1Id").classList.add("is-invalid"); 
    alert(`
    Name couldn't be a number!
    Name couldn't be greater than 20 characters
    Name couldn't be empty
    `)
  }
}

const DogNameComponent = () => {
const [dogName1, setDogName1] = useState("");
const [dogName2, setDogName2] = useState("");
const [dogName3, setDogName3] = useState("");


  let anotherDogHandler1 = () => {
    alert("anotherDogHandler1");
    document.getElementById("form2").classList.remove("d-none");
  };

  let anotherDogHandler2 = () => {
    // alert("anotherDogHandler2");
    document.getElementById("form3").classList.remove("d-none");
  };
  let anotherDogHandler3 = () => {
    // alert("anotherDogHandler3");

  };

  return (
    <>
      <div className="container-fluid">
    

          {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>First, what's your dog's name?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}

       
         {/* form 1 start */}
        <div className="row" id="form1">
          <div className="col-md-3"></div>
            <div className="col-md-6 ">
            <div className="form-card my-5  ">
              <div className="card shadow-sm border-0 ">
                <div className="card-body">
                  <label htmlFor="" className="nameLabel mb-1">
                    My dog is called...
                  </label>
                  <input
                    className="form-control inputName py-3"
                    type="text"
                    id="dogName1Id"
                    placeholder="Your dog's name"
                  />
                  <button
                    type="button"
                    className="btn btn-link float-end anotherDogBtn"
                    id="anotherDogBtn1"
                    onClick={anotherDogHandler1}
                  >
                    I have another dog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* form 1 end */}

        {/* form 2 start */}
        <div className="row d-none" id="form2">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-card mt-5 ">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <label htmlFor="" className="nameLabel">
                    My dog is called...
                  </label>
                  <input
                    className="form-control inputName py-3"
                    type="text"
                    placeholder="Your dog's name"
                    value={dogName2}
                    onChange={(e)=>setDogName2(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-link float-end anotherDogBtn"
                    id="anotherDogBtn2"
                    onClick={anotherDogHandler2}
                  >
                    I have another dog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* form 2 end */}

        {/* form 3 start */}
        <div className="row d-none" id="form3">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-card mt-5 ">
              <div className="card ">
                <div className="card-body">
                  <label htmlFor="" className="nameLabel">
                    My dog is called...
                  </label>
                  <input
                    className="form-control inputName py-3"
                    type="text"
                    placeholder="Your dog's name"
                    value={dogName3}
                    onChange={(e)=>setDogName3(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-link float-end anotherDogBtn"
                    id="anotherDogBtn3"
                    onClick={anotherDogHandler3}
                  >
                    I have another dog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* form 3 end */}



        <div className="row freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={carrot} alt="" />
          <p className="p2  ">The story of Butternut Box begins with a farting Staffie called Rudie. Only home-cooked meals could help her terrible farts, and the rest, as they say, is history.</p>
        </div>
        <div className="col-md-3"></div>

       </div>

{/* footer */}
<div className="footer shadow  text-center py-4">
    
    <NavLink to='/Gender' type="button" className="btn px-5 start-btn" onClick={Validation}>LET'S START</NavLink>

</div>

      </div>
    </>
  );
};

export default DogNameComponent;
