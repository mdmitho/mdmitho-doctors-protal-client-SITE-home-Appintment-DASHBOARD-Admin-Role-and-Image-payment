
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointemnt from './Pages/Appointment/Appointemnt';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { Toaster } from "react-hot-toast";
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments/MyAppointments';
import Review from './Pages/Review/Review';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory/MyHistory';
import Users from './Pages/Dashboard/Users/Users';
import RequireAdmin from './Pages/RequireAdmin/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor/ManageDoctor';

function App() {
  return (
    <div className=" max-w-7xl mx-auto bg-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointemnt />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
