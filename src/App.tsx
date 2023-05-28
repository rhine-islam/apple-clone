import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Support from "./pages/support";
import Dev from "./pages/dev";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/dev" element={<Dev />} />
    </Routes>
  );
};

export default App;
