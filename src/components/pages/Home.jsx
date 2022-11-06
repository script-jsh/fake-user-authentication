import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container hero">
      <h1>Kickstart your tech career in Software Engineering</h1>
      <p>Learn the in-demand skills required to take you from beginner to industry ready in 12 months. No degree or prior tech experience required.</p>
      <Link to="/signup" className="btn primary">Apply Now</Link>
    </div>
  )
}

export default Home