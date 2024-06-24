import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoachingPage from "./components/CoachingPage.jsx";
import FreeCoachingPage from "./components/FreeCoachingPage.jsx";
import { ScrollProvider } from "../src/components/ScrollContext";
function App() {
  return (
    <>
      <ScrollProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coaching" element={<CoachingPage />}></Route>
          {/* <Route path="/freecoaching" element={<FreeCoachingPage />}></Route> */}
        </Routes>
      </ScrollProvider>
    </>
  );
}

export default App;
