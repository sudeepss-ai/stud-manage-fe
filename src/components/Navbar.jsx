import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Student Management
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
  )
}

export default Navbar
