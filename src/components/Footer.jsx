import footerLogo from '../assets/logoFooter.svg'
import twiter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'
import facebook from '../assets/icon-facebook.svg'
import youtube from '../assets/icon-youtube.svg'
import pinterest from '../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className="bg-dark-blue ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1  md:grid-cols-4 gap-4 lg:items-start lg:justify-start items-center justify-center py-12 px-5 place-items-center">
        <div>
          <div>
            <img
              src={footerLogo}
              alt=""
              className="block mx-auto mb-8 md:mb-0"
            />
          </div>
          <div>
            <ul className="flex justify-center items-center gap-4 my-5 md:my-12">
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
        </div>
        <div>
          <ul className="footer-ul">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-ul">
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
          <div className="text-center lg:text-right">
            <button className="btn my-6  md:my-4 ">Request Invite</button>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-sm text-gray-500">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
