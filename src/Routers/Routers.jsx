import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Loading from "../Components/Loading/Loading";

const Home = React.lazy(() => import("../Pages/Home"));
const Login = React.lazy(() => import("../Pages/Login"));

const Routers = () => {
  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<DashBoardLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default Routers;
