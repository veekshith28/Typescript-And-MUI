// App.js
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import BlogSection from "./pages/Blog1";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/blog",
    element: <BlogSection />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App: React.FC=()=> {
  
  return (
<Container maxWidth="lg">
      <Navbar />
      <RouterProvider router={router} />;
      <Footer />
    </Container>
  );
}

export default App;
