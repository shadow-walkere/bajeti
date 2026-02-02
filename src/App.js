import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import the new Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NationalBudget from "./pages/NationalBudget";
import ProjectTracker from "./pages/ProjectTracker";
import CountyBudget from "./pages/CountyBudget";
import AlertCenter from "./pages/AlertCenter";
import ReportIssues from "./pages/ReportIssues";

export default function App() {
  return (
    <Router>
      {/* Wrap everything inside Layout.
         Navbar, Routes, and Footer are passed as "children" to Layout.
         Layout will position them to the right of the Sidebar.
      */}
      <Layout>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/national-budget" element={<NationalBudget />} />
          <Route path="/project-tracker" element={<ProjectTracker />} />
          <Route path="/county-budget" element={<CountyBudget />} />
          <Route path="/alerts" element={<AlertCenter />} />
          <Route path="/report" element={<ReportIssues />} />
        </Routes>

        <Footer />
      </Layout>
    </Router>
  );
}