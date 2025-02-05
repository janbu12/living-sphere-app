import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
// import Home from "./pages/Home";
// import About from "./pages/About";
import Error from "./pages/Error";
// import Property from "./pages/Property";
import Index from "./pages/index";
import Question1 from "./pages/question1";
import Question2 from "./pages/question2";
import Question3 from "./pages/question3";
import MapTest from "./pages/maptest"
import Confirmation from "./pages/confirmation"
import DistanceTest from "./pages/distancetest"
import Results from "./pages/results"
import NoPropertiesFound from "./pages/nopropertiesfound"

export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/">
          <Route index element={ <Index />} />
          <Route path="question1" element={ <Question1 />} />
          <Route path="question2" element={ <Question2 />} />
          <Route path="question3" element={ <Question3 />} />
          <Route path="maptest" element={ <MapTest />} />
          <Route path="confirmation" element={ <Confirmation />} />
          <Route path="distancetest" element={ <DistanceTest />} />
          <Route path="results" element={ <Results />} />
          <Route path="nopropertiesfound" element={ <NoPropertiesFound />} />
        </Route>
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}