import confetti from '../assets/image-confetti.jpg'
import curreny from '../assets/image-currency.jpg'
import plane from '../assets/image-plane.jpg'
import restaurant from '../assets/image-restaurant.jpg'

const Articles = () => {
  return (
    <div className="py-20 px-8">
      <div className="lg:max-w-7xl lg:mx-auto">
        <h2 className="text-3xl text-dark-blue text-center mb-8 lg:text-left">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 ">
          <div className="article-box">
            <img src={curreny} alt="" />
            <div>
              <h4>By Claire Robinson</h4>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="article-box">
            <img src={restaurant} alt="" />
            <div>
              <h4>By Wilson Hutton</h4>
              <h3> Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="article-box">
            <img src={plane} alt="" />
            <div>
              <h4>By Wilson Hutton</h4>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="article-box">
            <img src={confetti} alt="" />
            <div>
              <h4>By Claire Robinson</h4>
              <h3> Our invite-only Beta accounts are now live!</h3>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Articles
