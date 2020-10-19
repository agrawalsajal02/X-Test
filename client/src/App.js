import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import { Container } from 'react-bootstrap';
import {Route,Switch} from 'react-router-dom'
import Mainscreen from './Components/MainScreen/Mainscreen'
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Student from "./Components/MainScreen/Student";
import Faculty from "./Components/MainScreen/Faculty";
import TestWindow from "./Components/students/TestWindow"
function App() {
  return (
    <>

     <Header/>
        <main className="py-3">
<Container fluid>
  <Switch>
  <Route component={Mainscreen} path="/" exact/>
  <Route component={Login} path="/login" exact/>
  <Route component={Register} path="/register" exact/>
  <Route component={About} path="/about" exact/>
  <Route component={Contact} path="/contact" exact/>
  <Route component={Student} path="/students" exact/>
  <Route component={Faculty} path="/faculties" exact/>
  <Route component={TestWindow} path="/teststuents"/>
  </Switch>
</Container>
        </main>

        <Footer/>
    </>
      );
}

export default App;
