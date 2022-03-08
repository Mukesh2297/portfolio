import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Work from "./components/Work"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>    
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<Work />} />
    </Routes>
    </div>

  );
}

export default App;
