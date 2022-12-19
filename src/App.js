import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
