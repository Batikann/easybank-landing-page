import footerLogo from '../assets/logoFooter.svg'
import twiter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'
import facebook from '../assets/icon-facebook.svg'
import youtube from '../assets/icon-youtube.svg'
import pinterest from '../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-11 px-8 w-full flex flex-col gap-8 items-center justify-center lg:flex-row">
      <div>
        <img src={footerLogo} alt="" className="block mx-auto" />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twiter} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinterest} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4 text-white text-center text-sm">
          <li>
            <a href="#">About Us</a>
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
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn">Request Invite</button>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          {' '}
          © Easybank. All Rights Reserved{' '}
        </p>
      </div>
    </footer>
  )
}
export default Footer
