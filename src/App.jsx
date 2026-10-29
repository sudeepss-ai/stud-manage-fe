import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import PNF from './pages/PNF'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
