import logo from './logo.svg';
import './App.css';
import { hydrate } from 'react-dom';
import Form from './components/Form'
import Todo from './Todo';
import Task from './Task';


import dp from './hey.png';
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/team' element={<Teams />}></Route>
      <Route path='/addstudent' element={<Form />}></Route>
      <Route path='/todo' element={<Todo />}></Route>
      <Route path='/task' element={<Task />}></Route>
      

      </Routes>


      </BrowserRouter>

      

    </div>
  );
}




function About(){
  
  return(
    <div>
      This is my about component.
    </div>
  ) 
  
  
  
  
  // <div>
  //   <body bgcolor="green"><h1>My Portfolio</h1></body>
  //   <img src={dp} alt="this is my dp" width='15%' height='15%' style={{float: "right",margin:100}} />
  //   <h1 style={{color:"blue", fontSize: 30,float:"left",margin:200,padding:10,float:'left'}}><left>Mehboob khan</left></h1>
    
  //   {/* <h1 style={{color:"blue", fontSize: 30,float:"left",margin:220,padding:10}}>SEM:7th</h1>
  //   <h1 style={{color:"blue", fontSize: 30,float:"left",margin:230,padding:10}}>College: MIT Kundapura</h1> */}
    
    
  // </div>
}



function Contact(){
  return(
    <div>
      This is Contact Page.
    </div>
  )
}
function Teams(){
  return(
    <div>
      This is Team Page.
    </div>
  )
}

function NavBar(){
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/team">Teams</Link>
      <Link to="/addstudent">Add Student</Link>
      <Link to="/todo">TODO List</Link>
      <Link to="/task">FormTable</Link>
    </div>
  )
}
// function Skills(){

// }
// function Certification(){
// }
// function Contact(){
//   return <div><body bgcolor="green" style={{}}><h1>Contact</h1></body></div>

// }
// function Body(){
//   return <body bgcolor="green">hey</body>
// }

// function Skills(){
//   return <h1>I have intermediate skills</h1>
// }

// function Certification(){
//   return <h1>I am not certified still</h1>
// } 
// function Contact(){
//   return <h1>Call me 8088103533</h1>

// } 
// function Header() {
//   return <header className='App-header'>This is header</header>
// }
// function Body() {
//   return <header className='App-header'>This is header</header>
// }
// function Footer() {
//   return <header className='App-header'>This is header</header>
// }

export default App;
