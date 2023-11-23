// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">



<BrowserRouter>
     <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/Home' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>





    </div>
  );
}

export default App;
