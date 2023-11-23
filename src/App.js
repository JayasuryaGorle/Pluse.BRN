// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<Task/>
=======



<BrowserRouter>
     <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/Home' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>




>>>>>>> 4883722616e4cf5965f3cc5939d7724a4ecdb53f

    </div>
    
  );
}

export default App;
