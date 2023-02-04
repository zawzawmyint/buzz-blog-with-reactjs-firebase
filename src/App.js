import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./pages/Header";
import Login from "./pages/Login";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import SignOut from "./pages/SignOut";
import Settings from "./pages/Settings";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";
import Notifications from "./pages/Notifications";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}
