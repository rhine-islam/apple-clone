import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Support from "./pages/support";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default App;
