import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../../page/homePage/HomePage";
import Team from "../../page/teamPage/Team";
import Trend from "../trending/trend/Trend";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/trend" element={<Trend />} />
      </Routes>
    </Router>
  );
}

export default Routing;
