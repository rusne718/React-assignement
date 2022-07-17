
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import  Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Nav from './components/Navigation/Navigation';


function App() {

  
  const [data, setData] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) setLoggedIn(true)

   
    fetch("/verifyToken", {
    headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    })
    .then((res) => res.json())
    .then((data) => {
    if (data.verify === false) {
    setLoggedIn(false);
    } else {
    setLoggedIn(true);
    setUser({ username: data.username, id: data.id });
    }
    });

    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  },[])
 console.log("user", user)
 console.log(data)


  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user}/>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} setLoggedIn={setLoggedIn}/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home loggedIn={loggedIn} user={user}/>} />        
      </Routes>
    </>
  );
}

export default App;
