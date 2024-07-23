import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route } from "react-router-dom";
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Profile} from './Pages/Profile';
import {Nav} from './Pages/Nav';
import { useState , createContext } from 'react';
import {QueryClient , QueryClientProvider} from 'react-query'

export const profileContext = createContext();
function App() {
  const client = new QueryClient({defaultOptions :{
    queries : {refetchOnWindowFocus : false}
  }})
  const [username , setUsername] = useState("mohsen")
  return (
    <div className="App">
      <profileContext.Provider value={{username , setUsername}}>
      <QueryClientProvider client={client}>
      <Router>
        <h1>In The Name Of God</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:name?/:id?" element={<Profile />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
        <footer> <h1>This is a Footer</h1></footer>
      </Router>
      </QueryClientProvider>
      </profileContext.Provider>

    </div>
  );
}

export default App;
