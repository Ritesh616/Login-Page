
import './App.css';
import { Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <div className="App">

    
     <Routes>

        <Route exact path='/' Component={Login} />
        <Route exact path='/signup' Component={Signup} />
        <Route exact path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      
      </Routes>

     {/*
     <Login />
     <About />
     <Contact />
      <Signup /> */}
    

    </div>
  );
}

export default App;
