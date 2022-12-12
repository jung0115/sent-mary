import {
  BrowserRouter as Router,
  Routes, // Switch (v5) -> Routes (v6)
  Route
} from "react-router-dom";
import Home from "./routes/Home"

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;
}

export default App;