import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminHome from './Pages/AdminHome';
import AdminLogin from './Pages/AdminLogin';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  const [user, setUser] = useState(() => localStorage.getItem("isAuthenticated") === "true");
  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    setUser(true);
  };
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setUser(false);
  };

  useEffect(() => {
    setUser(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path='/admin'

element={user? <AdminHome/>: <Navigate to="/admin/login" replace></Navigate>}></Route>
        <Route
          path="/admin/login"
          element={user ? <Navigate to="/admin" replace /> : <AdminLogin onLogin={login} />}
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
