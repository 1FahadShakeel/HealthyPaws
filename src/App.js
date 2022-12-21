import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import DogNameComponent from './components/DogNameComponent';
import CustomerLove from './components/CustomerLove';
import BoyGirl from './components/boyGirl2nd/BoyGirl';
import CurrentlyEating from './components/currentlyeating5/CurrentlyEating';
import BodyLook from './components/bodyLook8/BodyLook';
import Age from './components/Age';
import Breed from './components/Breed';
import Eater from './components/Eater';
import ActiveDog from './components/Activedog/ActiveDog';
import Goals from './components/Goals';
import Help from './components/Help';
import DogWeight from './components/DogWeight/DogWeight';
import Allergies from './components/Allergies';
import HealthIssues from './components/HealthIssues';
import Snacks from './components/Snacks';
import Location from './components/Location';
import PetParent from './components/PetParent';
import Recipes from './components/Recipes';
import Recipes2 from './components/Recipes2';
import HealthFilter from './components/HealthFilter';
import IssuesNames from './components/IssuesNames';
import ExtraPlan from './components/ExtraPlan';
import ReviewPlan from './components/ReviewPlan';





function App() {
  return (


    <div className="App">

       <BrowserRouter>
       <Routes>
        <Route path='/' element={<DogNameComponent/>}/>
        <Route path='/Gender' element={<BoyGirl/>}/>
        <Route path='/Age' element={<Age/>}/>
        <Route path='/Breed' element={<Breed/>}/> 
        <Route path='/Food-Type' element={<CurrentlyEating/>}/>
        <Route path='/Eating-type' element={<Eater/>}/> 
        <Route path='/Eating-goals' element={<Goals/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/body-look' element={<BodyLook/>}/>
        <Route path='/dog-Weight' element={<DogWeight/>}/>
        <Route path='/Activity' element={<ActiveDog/>}/>
        <Route path='/Allergies' element={<Allergies/>}/>
        <Route path='/health-issues' element={<HealthIssues/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/petParent' element={<PetParent/>}/>
        <Route path='/plans-1' element={<Recipes />}/>
        <Route path='/plans-2' element={<Recipes2 />}/>
        <Route path='/plans-3' element={<ExtraPlan />}/>
        <Route path='/plans-4' element={<ReviewPlan />}/>
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
