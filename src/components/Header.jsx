import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
const Header = () => {
  return (
    <header className="p-5 flex items-center justify-between relative z-10 lg:max-w-7xl lg:mx-auto">
      <div>
        <img src={logo} alt="" />
      </div>

      <nav className="hidden">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>

      <button className="hidden lg:block">Request Invite</button>
      <div className="lg:hidden">
        <button>
          <img src={hamburger} alt="" />
        </button>
      </div>
    </header>
  )
}
export default Header
