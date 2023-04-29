import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Header from './components/header/header';
import Login from './pages/login/login';
import Register from './pages/register/register';
import PrivatePage from './pages/private/privatePage';
import Profile from './pages/profile/profile';
import Logout from './pages/logout/logout';
import { Container } from '@chakra-ui/react';
import ForgetPassword from './pages/forgetPassword/forgetPassword';
import ResetPassword from './pages/resetPassword/resetPassword'
function App() {
  return (
    <div className="app">
      <Header />
      <hr />
      <Container>
      <Routes>

        <Route exact path='/' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/forgetPassword' element={<ForgetPassword/>} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
      </Routes>
      </Container>
    </div >
  );
}

export default App;
