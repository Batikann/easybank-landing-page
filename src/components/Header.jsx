import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import closeIcon from '../assets/icon-close.svg'
import { useState } from 'react'
const Header = () => {
  const [navbar, setNavbar] = useState(false)
  console.log(navbar)
  return (
    <>
      <header className=" relative z-50 bg-white  w-full  shadow-sm">
        <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <nav
            className={
              navbar
                ? 'absolute md:relative md:block flex justify-center   md:right-0 md:translate-x-0 md:top-0 top-20    w-full bg-white rounded-md py-4 px-2 md:py-0 md:px-0   transition-all duration-700 max-w-xs md:max-w-full mx-auto left-0 right-0 text-center'
                : ' absolute -top-96 md:relative md:-top-0'
            }
          >
            <ul className="flex flex-col md:flex-row md:gap-6 gap-2 md:text-gray-400 text-dark-blue ">
              <li className="navbar-link">
                <a href="#">Home</a>
              </li>
              <li className="navbar-link">
                <a href="#">About</a>
              </li>
              <li className="navbar-link">
                <a href="#">Contact</a>
              </li>
              <li className="navbar-link">
                <a href="#">Blog</a>
              </li>
              <li className="navbar-link">
                <a href="#">Careers</a>
              </li>
            </ul>
          </nav>

          <button className="hidden md:block btn">Request Invite</button>
          <div className="md:hidden">
            <button
              onClick={() => setNavbar(!navbar)}
              className="transition-all duration-700"
            >
              <img
                src={navbar ? closeIcon : hamburger}
                alt=""
                className="w-6 h-4 object-cover"
              />
            </button>
          </div>
        </div>
      </header>
      <div
        className={
          navbar ? `fixed inset-0 bg-black opacity-50 z-30 ` : 'hidden'
        }
      ></div>
    </>
  )
}
export default Header
