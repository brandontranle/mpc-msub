import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {Navbar} from "./components/navigation/Navbar/Navbar";
import { Footer } from "./components/navigation/Footer/Footer";


function App() {

  return (
   <main className="bg-default text-primary w-full font-inter min-h-screen">
    <div className="xl:px-64">
     <Router>
     <Navbar/>

       <Routes>
         <Route path="/" element={<Home />} />
       </Routes>
       <Footer/>
     </Router>
     </div>
     </main>
  )
}

export default App
