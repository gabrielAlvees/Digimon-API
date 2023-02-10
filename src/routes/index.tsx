import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home } from "../pages/Home/index";
import { Cards } from "../pages/Cards";

export const NavigateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </Router>
  );
};
