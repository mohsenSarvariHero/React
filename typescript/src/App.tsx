// import { ShowInfo } from './component/ShowInfo';
import './App.css';
// import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom" ; 
 import {ShowInfo , Country} from "./component/ShowInfo"
function App() {
    //تعریف تابع که هم باید نوع ورودی و هم نوع خروجی مشخص کنیم 
  const getAge = (name : string) : number =>{
    return 43
  }   
  const age = getAge("mohsen")
  return (
    <div className="App">
  
 
     {/* <Router>
        <Link to="/person">ShowInform</Link>
        <Routes>
          <Route path="/person" element={<ShowInfo />} />
        </Routes>
     </Router> */}

        <ShowInfo 

        name={"mohsen"}
        email={"mohsen.sarvari@ut.ac.ir"}
        age = {23}
        isMarried = {true}
        courses = {["react" , "next" , "tailwind"]}
        country = {Country.Iran}

        />
    </div>
  );
}

export default App;
