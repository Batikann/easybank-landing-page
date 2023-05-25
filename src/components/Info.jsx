import online from '../assets/icon-online.svg'
import budgeting from '../assets/icon-budgeting.svg'
import onboarding from '../assets/icon-onboarding.svg'
import api from '../assets/icon-api.svg'

function Info() {
  return (
    <div className="bg-very-light-gray px-10 py-20 text-center lg:text-left lg:px-5  ">
      <div className="block mx-auto lg:max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl mb-3 text-dark-blue">Why choose Easybank?</h2>
          <p className="text-sm leading-relaxed text-gray-400 lg:text-base lg:max-w-xl">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-6">
          <div className="box">
            <img src={online} alt="" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="box">
            <img src={budgeting} alt="" />
            <h3> Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="box">
            <img src={onboarding} alt="" />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="box">
            <img src={api} alt="" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info
