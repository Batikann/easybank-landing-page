import mobileImg from '../assets/bg-intro-mobile.svg'
import mockup from '../assets/image-mockups.png'
import desktopImg from '../assets/bg-intro-desktop.svg'

function Hero() {
  return (
    <section class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:place-items-center pb-28 lg:pb-0">
      <article class="lg:px-[87px] text-center max-w-7xl mx-auto lg:text-left">
        <h1 class="text-dark-blue text-3xl mb-6 lg:text-5xl">
          Next generation digital banking
        </h1>

        <p class="px-10 lg:px-0 text-gray-400 pb-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button class="btn">Request Invite</button>
      </article>

      <article class="relative">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopImg} />
          <img src={mobileImg} alt="" class="w-full" />
        </picture>

        <img src={mockup} alt="" class="absolute -top-32 lg:-right-20 w-full" />
      </article>
    </section>
  )
}
export default Hero
