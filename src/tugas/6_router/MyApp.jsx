import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import About from './Pages/About';
import Films from './Pages/Films';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PrivateRoute from './Router/PrivateRoute';

function MyApp() {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [users,setUsers] = useState({});

  const handleClickSbar = () => {
    setHideSidebar(!hideSidebar);
  }

  const handleUser = (user) => {
    setUsers({
      email: user.email,
      password: user.password
    })

    if(user.email === 'test@email.com' && user.password === 'test-1234'){
      setIsLoginSuccess(true);
      users.email = user.email;
      users.password = user.password;
    }
  }

  const handleLogout = () => {
    setIsLoginSuccess(false);
  }

  return (
    <div>
        {hideSidebar && <div className='fixed z-10'>
          <Sidebar clickSidebar={handleClickSbar} logout={handleLogout} isLogged={isLoginSuccess}/>
        </div>
        }
        <Navbar clickSidebar={handleClickSbar}/>
        <Routes>
          <Route path='/' element={<Home isLogged={isLoginSuccess} clickSidebar={handleClickSbar}/>} />
          <Route path='login/*' element={<Login user={handleUser} />} />
          <Route path='/films' element={
            <PrivateRoute isLogged={isLoginSuccess}>
              <Films />
            </PrivateRoute>
          } />
          <Route path='/about' element={
            <PrivateRoute isLogged={isLoginSuccess}>
              <About />
            </PrivateRoute>
          } />
        </Routes>


        <Footer />
    </div>
  )
}

export default MyApp;