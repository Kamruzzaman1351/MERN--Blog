import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/user/Home"
import Login from "./pages/user/Login"
import AdminLogin from "./pages/admin/AdminLogin"
import Registration from "./pages/user/Registration"
import Dashboard from "./pages/user/Dashboard"
import AdminDashboard from "./pages/admin/Dashboard"
import MyPost from "./pages/user/MyPost"
import Header from "./components/shared/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPrivateRoute from "./components/UserPrivateRoute"
import Footer from "./components/shared/Footer"
import AdminPrivateRoute from "./components/AdminPrivateRoute"
import UserList from "./pages/admin/UserList"
function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPrivateRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/allusers" element={<UserList />} />
          </Route>
          <Route path="/user" element={<UserPrivateRoute />} >
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/post" element={<MyPost />} />
          </Route>
          <Route path="/user/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/register" element={<Registration />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
    </>
  );
}

export default App;
