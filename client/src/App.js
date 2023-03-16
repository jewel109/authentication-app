import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Header from './components/header/header';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ResetPassword from './pages/reset-password/reset-password';
import PrivatePage from './pages/private/privatePage';
function App() {
  return (
    <div className="app">
      <Header />
      <hr />
      <Routes>
        <Route path='/home' element={<p>home</p>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/private' element={<PrivatePage />} />
      </Routes>
    </div >
  );
}

export default App;
