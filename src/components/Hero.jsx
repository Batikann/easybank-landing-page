import mobileImg from '../assets/bg-intro-mobile.svg'
import mockup from '../assets/image-mockups.png'

function Hero() {
  return (
    <div>
      <div className="relative">
        <picture>
          <source
            media="(min-width:768px )"
            srcset="../assets/bg-intro-desktop.svg"
          />
          <img src={mobileImg} alt="" className="w-full" />
        </picture>
        <img src={mockup} alt="" className="absolute top-0 hidden" />
      </div>
      <div className="py-20 px-10  text-center block mx-auto  ">
        <h1 className="text-3xl text-dark-blue">
          Next generation digital banking
        </h1>
        <p className="text-gray-400 mt-6 text-sm">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn mt-8">Request Invite</button>
      </div>
    </div>
  )
}
export default Hero
