import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './pages/Update';

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const togglePage = (pageName)=> {
    setCurrentPage(pageName);
  }

  return (
    <div className="App">
      {
        currentPage === "login" ? <Login onPageSwitch={togglePage}/> : <Signup onPageSwitch={togglePage}/>
      
      }
        <Update/>
    </div>
  );
}

export default App;
