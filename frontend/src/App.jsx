import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <div >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
