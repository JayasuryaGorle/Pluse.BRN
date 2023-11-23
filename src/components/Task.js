import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';
import { FaHome,FaGift} from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'


function Task({answer}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showS, setShowS] = useState(false);
  const handleCloseS = () => setShowS(false);
  const handleShowS = () => setShowS(true);


  return (
    <div>
<div>
    <h3 className='pageTitle'>Tasks
    <p className='subTitle'>Tasks assigned to you for completion and upload</p>
    </h3>
    </div>
    <div className='div'>
  
      <Navbar bg="secondary" data-bs-theme="secondary">
        <Container >
          <Nav className="me-auto">
     
            <Nav.Link href="#home" className='homeText'>
              <FaHome  className='icon' /><strong>Home</strong></Nav.Link>
      <Nav.Link href="#features"  className='taskText'><AiOutlineDoubleRight /><strong>Tasks</strong>  <AiOutlineDoubleRight /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className='border'>
      <Nav className='disabled'>
      <Nav.Item>
        <Nav.Link  eventKey="disabled" disabled className='text'>
        <AiOutlineForm className='icon2' />
        <strong>Tasks Assigned to you</strong>  
        </Nav.Link>

   <div className='search'>
 <div>
  <select >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="All">All</option>
  </select> 
  <label for="option">:records</label>
  </div>
<div style={{ position: 'relative', bottom: '57.5%', left: '24%' }} >
<label>My search :</label>
<input ></input>
</div>
</div>

        <br></br>
       <div  className='tableSet'>
        <Table striped bordered hover variant="dark">
   
      <thead>
        <tr>
          <th>#</th>
          <th>UID</th>
          <th>ID</th>
          <th>Type</th>
          <th>Title</th>
          <th>Requirements</th>
          <th>Issues</th>
          <th>Build To Store</th>
          <th>Deadline</th>
          <th>Max.File Size</th>
          <th>Status</th>
          <th>Point To Earned</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
         <td>1</td>
         <td>abcd</td>
          <td>11111</td>
          <td>technical t</td> 
          <td>project</td>
          <td>create as per requirements</td>
          <td>open:0<br></br>
          fixed:0<br></br>closed:0</td>
         <td>NA</td>
         <td>BEFORE 5PM </td>
          <td> Not More Than 40Mb</td>
          <td>
          <>
      <Button variant="primary" onClick={handleShowS}>
        pending
      </Button>

      <Offcanvas show={showS} onHide={handleCloseS}  style={{width:"78%" ,height:"100%"}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  className='canvasTitle'>Submit Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p className='task'><strong></strong>Task Details:</p>
        <Table striped bordered hover size="sm" style={{width:"40%",height:"40%",border:" 1px solid black"}}>
        <tr >

         <th  >Task no </th>
         <td>10</td>
        </tr>
        <tr>
         <th>ID </th>
         <td>1000</td>
        </tr>
        <tr>
         <th>UID</th>
         <td>batch01010</td>
        </tr>
        <tr>
         <th>Task type</th>
         <td>PROJECT</td>
        </tr>
         <tr>
         <th>Task Title</th>
         <td>name of the project</td>
        </tr>
        <tr>
         <th>Task status </th>
         <td>pending</td>
        </tr>
        
    </Table>
    
    <Table striped bordered hover size="sm" style={{width:"40%",height:"40%",border:" 1px solid black"}} className='correct' >
      <tr>
        <th>Task Requirements</th>
        <td>create as per requirements</td>
      </tr>
      <tr>
        <th>point gained</th>
        <td>null /100</td>
      </tr>
      <tr>
        <th>Task Deadline</th>
        <td>before 2:00 deadline</td>
      </tr>
      <tr>
        <th>Max.file.Size</th>
        <td>not more than 40mb</td>
      </tr>
      <tr>
        <th>xcode/AppId/Bundle Id</th>
        <td>gyhufttfv</td>
      </tr>
      <tr>
        <th>AppID/AppStore/AppName</th>
        <td>mjnbvcctt</td>
      </tr>
      <tr>
        <th>Build to Store</th>
        <td>jihtrrdeevghj</td>
      </tr>
    </Table>
    <br></br>

    
    <Accordion defaultActiveKey="0" className='accordian'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header> <FaGift />Check List</Accordion.Header>
        <Accordion.Body style={{height:"40%"}}>
<form>
   <div>
  <label className='head' >Completed Task on your own  :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No" ></option>

    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Followed Coding Standards   :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No" >No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Give Proper Comments   :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Code Re-Usable,Scalable,Flexible:</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Code Re-Usable,Scalable,Flexible:</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Attractive UI:</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Have done Proper unit testing:</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Has bugs in the Task:</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >Able to do this task your own:</label>
  <select className='tail'>
    <option value="select">select..</option>
    <option value="No">No</option> 
    <option value="YES">YES</option>
   
  </select>
  </div>

  <div style={{paddingLeft:"40%"}} >
    <input type='file'></input><br></br>
    <Button variant="light"  onClick={()=>{
      alert("uploaded successfully")
    }}>Upload</Button>
    <p>Uploading Status loaded total....</p>
  </div>
  <div style={{paddingLeft:"85%"}}>
  <Button variant="dark"  >CLOSE</Button>
  </div>
 
  </form>
 
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>







        </Offcanvas.Body>
      </Offcanvas>
    </>
    </td>
          <td>0/100</td>
        </tr>
    
        <tr>
         <td>1</td>
         <td>abcd</td>
          <td>11111</td>
          <td>theory task</td> 
          <td>project</td>
          <td>prepare for interview on project</td>
          <td>open:0<br></br>
          fixed:0<br></br>closed:0</td>
         <td>NA</td>
         <td>BEFORE 5PM </td>
          <td> Not More Than 40Mb</td>
          <td>
          <>
      <Button variant="primary" onClick={handleShow}>
        pending
      </Button>

      <Offcanvas show={show} onHide={handleClose}  style={{width:"78%" ,height:"100%"}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='canvasTitle'>Submit task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p className='task'><strong></strong>Task Details:</p>
        <Table striped bordered hover size="sm" style={{width:"40%",height:"40%",border:" 1px solid black"}}>
        <tr >

         <th  >Task no:</th>
         <td>10</td>
        </tr>
        <tr>
         <th>ID:</th>
         <td>1000</td>
        </tr>
        <tr>
         <th>UID:</th>
         <td>batch01010</td>
        </tr>
        <tr>
         <th>Task type:</th>
         <td>theory task</td>
        </tr>
         <tr>
         <th>Task Title:</th>
         <td>name of the project</td>
        </tr>
        <tr>
         <th>Task status:</th>
         <td>pending</td>
        </tr>
        
    </Table>
    
    <Table striped bordered hover size="sm" style={{width:"40%",height:"40%",border:" 1px solid black"}} className='correct' >
      <tr>
        <th>Task Requirements</th>
        <td>prepare for interview</td>
      </tr>
      <tr>
        <th>point gained</th>
        <td>null /100</td>
      </tr>
      <tr>
        <th>Task Deadline</th>
        <td>before 2:00 deadline</td>
      </tr>
      
      <tr>
        <th>xcode/AppId/Bundle Id</th>
        <td>gyhufttfv</td>
      </tr>
      <tr>
        <th>AppID/AppStore/AppName</th>
        <td>mjnbvcctt</td>
      </tr>
      <tr>
        <th>Build to Store</th>
        <td>jihtrrdeevghj</td>
      </tr>
    </Table>
    <br></br>

    
    <Accordion defaultActiveKey="0" className='accordian'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>  <FaGift />Check List</Accordion.Header>
        <Accordion.Body style={{height:"40%"}}>
<form>
   <div>
  <label className='head' >UnderStood the concept Well  :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >No .of Mock interview Attend :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="moreThen3"> more then 3</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >learn use of Technical Terms   :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  <br></br>
  <div>
  <label className='head' >can you clear BRN Mock interview on this concept :</label>
  <select className='tail' >
    <option value="select">select..</option>
    <option value="No">No</option>
    <option value="YES">YES</option>
  </select>
  </div>
  </form>
 
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
         
    </td>
    <td>0/100</td>
        </tr>
      </tbody>

      
      </Table>

      
      </div>
      
      </Nav.Item>
    </Nav>
    </div>
    </div>
    </div>
  )
}

export default Task