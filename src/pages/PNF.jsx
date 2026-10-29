import { Link } from 'react-router-dom'

function PNF() {
  return (
    <div className="pnf-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="view-students-btn">
        Back to Home
      </Link>
    </div>
  )
}

export default PNF
