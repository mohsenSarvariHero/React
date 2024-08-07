import {First} from '../components/1';
import {Second} from '../components/2';
import logo from '../logo.svg';
import {useState,createContext} from "react";
import '../App.css';
export const profileContext = createContext()
export function Home(){
  
  const [homeN , setHomeN] = useState("mohsen")
    return(
        <div>
          <profileContext.Provider value={{homeN , setHomeN}} >
            home page {homeN}
            <First />
            <Second />
          </profileContext.Provider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </div>
        
    )
}