import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/user/Home"
import Login from "./pages/user/Login"
import Registration from "./pages/user/Registration"
import Dashboard from "./pages/user/Dashboard"
import MyPost from "./pages/user/MyPost"
import Header from "./components/shared/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/post" element={<MyPost />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Registration />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
    </>
  );
}

export default App;
