import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Status from "./pages/Status";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
//
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Set base page canvas background to your Secondary Cream color */}
      <div className="flex min-h-screen flex-col bg-secondary text-slate-900 selection:bg-primary/20">
        
        {/* UPPER BLUE ZONE: Locks Navbar onto a flat, solid block background */}
        <header className="sticky top-0 z-50 w-full bg-primary text-white border-b border-white/10 shadow-md">
          <Navbar />
        </header>

        {/* LOWER CONTENT ZONE: Seamlessly streams the active route component pages */}
        <main className="flex-1 w-full pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/status" element={<Status />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;