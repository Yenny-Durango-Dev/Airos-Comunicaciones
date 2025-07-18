import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// paginas
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CoveragePage from "./pages/CoveragePage";
import InvoicePage from "./pages/InvoicePage";
import PlansPage from "./pages/PlansPage";
import SpeedTestPage from "./pages/SpeedTestPage";
import PlansFormPage from "./pages/PlansFormPage";

import { TaskProvider } from "./context/TasksContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main>
            <Navbar />
            <Routes>
              {/* paginas publicas */}
              <Route path='/' element={<HomePage />} />
              <Route path='/about-us' element={<AboutUsPage />} />
              <Route path='/plans' element={<PlansPage />} />
              <Route path='/coverage' element={<CoveragePage />} />
              <Route path='/invoice' element={<InvoicePage />} />
              <Route path='/speed-test' element={<SpeedTestPage />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/plans-form' element={<PlansFormPage />} />
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}
export default App;