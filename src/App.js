import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import NationalBudget from "./pages/NationalBudget";
import ProjectTracker from "./pages/ProjectTracker";
import CountyBudget from "./pages/CountyBudget";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/national-budget" element={<NationalBudget />} />
         <Route path="/project-tracker" element={<ProjectTracker />} />
         <Route path="/county-budget" element={<CountyBudget />} />
      </Routes>

      <Footer />
    </Router>
  );
}
