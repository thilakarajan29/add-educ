import image from './1000_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LegalPulse</h1>
      <img
        src={image}
        alt="profile"
        className="profile-img"
      />
    </nav>
  )
}

export default Navbar
