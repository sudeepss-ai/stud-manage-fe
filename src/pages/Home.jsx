import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Student Management System</h1>
      <p>
        Welcome to the Student Management System. Easily manage student records, admissions, and course details.
      </p>
      <Link to="/students" className="view-students-btn">
        View Students
      </Link>
    </div>
  )
}

export default Home
