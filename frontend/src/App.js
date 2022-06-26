import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/user/Home"
import Login from "./pages/user/Login"
import Registration from "./pages/user/Registration"
import Dashboard from "./pages/user/Dashboard"
import MyPost from "./pages/user/MyPost"
import Header from "./components/shared/Header"

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
    </BrowserRouter>
    </>
  );
}

export default App;
