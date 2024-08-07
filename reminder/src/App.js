
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom" ; 

import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Tail} from "./components/Tail"
import { Hook } from './components/Hook';
import{Reducer} from './components/Reducer'
import { FormReduce } from './components/FormReduce';
import { Login } from './components/Login';
import {Provider} from 'react-redux';
import { store } from './components/Store';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Link to="/" >Home</Link> | 
            <Link to="/about" >About</Link> | 
            <Link to="/contact" >Contact</Link> | 
            <Link to="/tail" >Tailwind</Link> | 
            <Link to="/hook" >useHook</Link> | 
            <Link to="/reducer" >Reducer</Link> | 
            <Link to="/formReduce" >FormReducer</Link> | 
            <Link to="/Login" >Login</Link> | 
            <Link to="/person" >propTypes(Person)</Link> | 
            <p></p>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tail" element={<Tail />} />
                <Route path="/hook" element={<Hook />} />
                <Route path="/reducer" element={<Reducer />} />
                <Route path="/formReduce" element={<FormReduce />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/person" element={<Person />} />
                <Route path="/*" element={<h1>Not Found</h1>} />
                
            </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
