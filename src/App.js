import {
  BrowserRouter as Router,
  Routes, // Switch (v5) -> Routes (v6)
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import Content from "./routes/Content";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content/:id" element={<Content />} />
    </Routes>
  </Router>;
}

export default App;