import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}