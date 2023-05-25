import mobileImg from '../assets/bg-intro-mobile.svg'
import mockup from '../assets/image-mockups.png'
import desktopImg from '../assets/bg-intro-desktop.svg'

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-hero-pattern hidden w-full h-screen bg-no-repeat bg-right absolute -right-[25%] -top-[5%]">
        <img
          src={mockup}
          alt=""
          className="absolute lg:-top-[16%] lg:-right-[15%] hidden"
        />
      </div>
      <div className="py-56 px-5 max-w-7xl mx-auto relative flex justify-between">
        <div className="flex flex-col gap-8 items-start max-w-md">
          <h1 className="text-5xl text-dark-blue font-normal">
            Next generation digital banking
          </h1>
          <p className="text-base text-gray-500">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn ">Request Invite</button>
        </div>
      </div>
    </div>
  )
}
export default Hero
