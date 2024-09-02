
import './App.css';
import { Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Sign from './Signup/Sign';
import Customer_list from './Customer_list/Customer';

function App() {
  return (
    <div className="App">

    
     <Routes>

        <Route exact path='/' Component={Login} />
        <Route exact path='/sign' Component={Sign} />  
        <Route exact path='/signup' Component={Signup} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/contact' Component={Contact} />
       <Route exact path='/customer_list' Component={Customer_list} />
      
      </Routes>

     {/*
     <Login />
     <About />
     <Contact />
      <Signup />
       <Customer_list />  */}
     
    

    </div>
  );
}

export default App;
