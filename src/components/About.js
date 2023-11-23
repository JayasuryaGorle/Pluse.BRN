import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { FaHome } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
import { LuLogIn } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



function About() {

  let navigate = useNavigate();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [isDarkMode,setIsDarkMode] =useState(false);

  let darkMode =()=>{

    setIsDarkMode(!isDarkMode);
}


  return (
    <div className='about' style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>

<Navbar style={{width:"100%"}} className='main' bg="dark" data-bs-theme="dark">
    <Container>
     
<Navbar.Brand className='navbar' href="#home"><img style={{marginLeft:"-30%",width:'47%'}}  src='https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png'></img></Navbar.Brand>
      <Nav className="me-auto">
      
        {/* <Nav.Link  href="#home"  onClick={()=>{
         }} style={{marginLeft:'-3%'}}>< FaHome style={{fontSize:"30",marginTop:"-10%",color:"cyan"}}/><b>Home</b></Nav.Link>
      
         */}
 


<Dropdown id='profile'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <CgProfile  style={{fontSize:"30",marginTop:"-10%",color:"cyan"}}/> <b> profile </b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <h6>Hello anonymous.</h6>
      <br></br>
     
        <Dropdown.Item href="#/action-1" onClick={()=>{
          navigate("/Login");
          
        }}style={{marginLeft:"-63%",marginTop:'-0.15%'}} ><LuLogIn style={{fontSize:"25",marginTop:"-10%",color:"cyan"}} /> Login</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>{
        navigate("/Signup");
        
        }} style={{marginLeft:"-63%"}}><SiGnuprivacyguard style={{fontSize:"25",marginTop:"-10%",color:"cyan"}} /> Signup</Dropdown.Item>
        
    
        
      </Dropdown.Menu>
    </Dropdown>

    <>
      <Button variant="success" onClick={handleShow}>
      < MdPermContactCalendar style={{fontSize:"30",marginTop:"-10%",color:"cyan"}}/> CONTACT US
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img style={{width:'40%'}} src='https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png'></img></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4><mark>#</mark>Web Development & Mobile Apps Practical Training'</h4>
          <br></br>
          <h3 style={{color:"red"}}> CONTACT INFORMATION</h3>
         <h5>< FaWhatsapp style={{fontSize:"30",marginTop:"-2%",color:"green"}}/> 9966309900 </h5>
         <h5>< MdAttachEmail style={{fontSize:"30",marginTop:"-2%",color:"black"}}/> info@brninfotech.com</h5>
         <h5>< FaGlobeAmericas style={{fontSize:"30",marginTop:"-2%",color:"black"}}/> https://www.brninfotech.com</h5>
        <h5>< FaSquareXTwitter style={{fontSize:"30",marginTop:"-2%",color:"black"}}/> https://twitter.com/brninfotech</h5>
       <h5>< MdLocationPin style={{fontSize:"30",marginTop:"-2%",color:"red"}}/> 3rd Floor, Amma Nilayam, Jai Hind Enclave , Beside Narayana E-Techno School & Karvy, Ayappa Society, Madhapur Hyderabad, Telangana 500081</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>

 
    <Dropdown id='profile'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
      <BsAndroid2  style={{fontSize:"30",marginTop:"-0.7%",color:"cyan"}} /> <b>IOS / ANDROID </b>

      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"100%"}}>
      
        <Dropdown.Item href="https://reactnative.dev/" style={{marginLeft:'-55%',marginTop:"15%"}}><TbBrandReactNative style={{fontSize:"25",marginTop:"-0.8%",color:"cyan"}}/> React Native</Dropdown.Item>
        
        
    
        
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown id='profile'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <CiGlobe  style={{fontSize:"30",marginTop:"-0.7%",color:"cyan"}}/> <b>MERN </b>

      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"100%"}} >
      

      <Dropdown.Item href="https://www.npmjs.com/package/mongodb" style={{marginLeft:'-63%',marginTop:"15%"}}><SiMongodb style={{fontSize:"25",marginTop:"-0.8%",color:"cyan"}} />Mongo DB</Dropdown.Item>
      <Dropdown.Item href="https://expressjs.com/" style={{marginLeft:'-63%',marginTop:"15%"}}><SiExpress style={{fontSize:"25",marginTop:"-0.8%",color:"cyan"}} /> Express js</Dropdown.Item>
      <Dropdown.Item href="https://react.dev/" style={{marginLeft:'-63%',marginTop:"15%"}}><RiReactjsFill style={{fontSize:"25",marginTop:"-0.8%",color:"cyan"}} />React js</Dropdown.Item>
      <Dropdown.Item href="https://nodejs.org/en/" style={{marginLeft:'-63%',marginTop:"15%"}}><FaNodeJs style={{fontSize:"25",marginTop:"-0.8%",color:"cyan"}} />Node js</Dropdown.Item>
  
        </Dropdown.Menu>
    </Dropdown>
    
    
   
<MdOutlineDarkMode  style={{fontSize:"35",marginTop:"-0.1%",color:"cyan"}} onClick={()=>{
        darkMode();
      }}/>

      </Nav>
    </Container>


  </Navbar>
  <br></br>

  <div id='aboutImgs'>



<h2 style={{marginLeft:'-18%'}}>< FaGlobeAmericas style={{fontSize:"30",marginTop:"-0.5%",color:"black"}}/>Web Development & <CiMobile1 style={{fontSize:"30",marginTop:"-0.5%",color:"black"}}/> Mobile Apps Practical Training'</h2>
<br></br>
<div className='cards'>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Vinay-D.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Vinay Dhyani</Card.Title>
        <Card.Text>
        College Name:  Beehive Engineering College , Dehradun

Year of Passout:  Mechanical-2018
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Sandeep-GJ.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Sandeep G</Card.Title>
        <Card.Text>
        College Name:  Sitams College of Engineering , Chittor

Year of Passout:  ECE-2018
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2016/08/canva-photo-editor-1.png" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>A.Sai Kashyap</Card.Title>
        <Card.Text>
        College Name: Mother Teresa Engineering College , Peddapalli Dt.
       Year of Passout: CSE-2011
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2016/08/IMG_5662-removebg-preview.png" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Priyanka. A</Card.Title>
        <Card.Text>
        College Name: Sri Vidyaniketan College of Engineering , Tirupathi

Year of Passout: EEE-2015
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://www.brninfotech.com/wp-content/uploads/2015/12/Untitled-design-5.png' />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Bharat Shankar A</Card.Title>
        <Card.Text>
        College Name: SISTAM college of engineering , Srikakulam

Year of Passout: CSE-2010
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/03/subhashree-ratha-1-e1588977082667.jpg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Subhashree</Card.Title>
        <Card.Text>
        College Name: KIST , Orissa

Year of Passout:  Mechanical-2010
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2016/08/Madhukar_1611.png" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>S.Madhukar</Card.Title>
        <Card.Text>
        College Name: Vaagesawri College of Engineering , Karimanagar

Year of Passout: CSE-2014
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2017/01/canva-photo-editor-4.png" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Saurabh Chowdary</Card.Title>
        <Card.Text>
        College Name: KITS, WCEM , Nagpur University

Year of Passed out: MCA-2011 & M.Tech-2015
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Sai-Kishore-P.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Sai Kishore P</Card.Title>
        <Card.Text>
        College Name: B V Raju Institute of Technology, Hydeabad

Year of Passout:  EEE-2016
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Sai-Prashanth-A.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Sai Prashanth A</Card.Title>
        <Card.Text>
        College Name: Sri Venkateswara College of Engineering and Technology, Nellore

Year of Passout:  Mechanical-2018
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Prakash-B.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Prakash B</Card.Title>
        <Card.Text>
        College Name: JNTU, Hyderabad

Year of Passout:  EEE-2014
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Praveen-S.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Praveen S</Card.Title>
        <Card.Text>
        College Name: Gitam University, Hyderabad

Year of Passout:  IT-2016
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='iteams' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.brninfotech.com/wp-content/uploads/2020/05/Shalini-B.jpeg" />
      <Card.Body>
        <Card.Title style={{color:'red'}}>Shalini B</Card.Title>
        <Card.Text>
        College Name: Sridevi Women's Engineering College, Hyderabad

Year of Passout:  EEE-2014
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

   

</div>


    </div>
  )
}

export default About