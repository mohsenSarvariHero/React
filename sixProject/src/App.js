import logo from './logo.svg';
import './App.css';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import {Excuser} from "./Excuser";
import {useState} from 'react';
import { useToggle } from './useToggle';
import {useCount} from './useCount';
function App() {
  const [isVisible , toggle] = useToggle()
  const { increase , decrease , reset , valueF}= useCount()
  const client = new QueryClient({
    defaultOptions :{
      queries :{refetchOnWindowFocus : true}
    }
  })
  //onst {state : isVisible , toggle : toggle2} = useToggle() if use object

  //const [isVisible2 , toggle2] = useToggle(true)
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Excuser />
      </QueryClientProvider>
      <button onClick = {increase}>increase</button>
      <button onClick = {decrease}>decrease</button>
      <button onClick = {reset}>reset</button>
      <h2>{valueF}</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggle}>
          {isVisible ? "hide" : "show"}
        </button>
        {
          isVisible &&  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        }
       
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
  );
}

export default App;
