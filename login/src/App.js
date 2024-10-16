
import './App.css';
import { Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login/Login';
import Sign from './Signup/Sign';
import Customer_list from './Customer_list/Customer';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Purchase from './Purchase';


function App() {
  return (
    <div className="App">
    
      <Routes>

        <Route exact path='/' Component={Dashboard} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/sign' Component={Sign} />  
        <Route exact path='/about' Component={About} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/customer_list' Component={Customer_list} />
        <Route exact path='/dashboard' Component={Dashboard} />     
        <Route exact path='/navbar' Component={Navbar} />
        <Route exact path='/purchase' Component={Purchase} />
      </Routes>

     {/*
     <Login />
     <About />
     <Contact />
      <Sign />
       <Customer_list /> 
       <Page />  
       <Dashboard />*/}

    </div>
  );
}

export default App;
