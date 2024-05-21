import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Text} from './components/Text';
function App() {

const [showText , setShowText] = useState(false);
const showInput = ()=>{
  
  setShowText(!showText)
  
}
  return (
    <div className="App">
      
    <button type="submit" onClick={showInput}>show text</button><br/><br/>
    {showText  &&  <Text />}
    </div>
  );
}

export default App;
