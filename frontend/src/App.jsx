import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Jobs from "./pages/jobs/Jobs";
import Job from "./pages/job/Job";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyJobs from "./pages/myJobs/MyJobs";
import "./app.scss";
import {
  QueryClient,
  QueryClientProvider,
 
} from "@tanstack/react-query";
import Payment from "./pages/payment/Payment";
import Success from "./pages/success/Success";


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/myJobs",
          element: <MyJobs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/job/:id",
          element: <Job />,
        },
        
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/payment/:id",
      element: <Payment />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
