import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUsers from './components/users/EditUsers';
import ViewUser from './components/users/ViewUser';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/users/add" element ={<AddUser/>}/>
          <Route path="/users/edit/:id" element ={<EditUsers/>}/>
          <Route path="/users/:id" element ={<ViewUser/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
