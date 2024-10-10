import './Rates.css'

const Rates = () => {
  return (
    <div className='rates-container'>
    <div className="aboutTopLine">
        <div className="aboutrightline"></div>
        <div className="aboutrightline"></div>
        <div className="aboutrightline"></div>
      </div>
      <div className='text-6xl mb-5 mt-10  ml-12 textColor'>First class car attention</div>
      <div className='text-5xl ml-12 my-10 textFont'>at home & at affordable rates</div>
      <div className='ml-12 my-5 text-xl ratesDescription'>
      We work just like a delivery service, except for matters of health for your car! Expect a<br/>
high level mechanic at a fraction of the price offered by car workshops, with all the tools<br/>
& expertise needed to bring your car up to speed on all regulations and safety protocols.<br/>
Booking with us is fast, easy and above all, we are here to serve you!
      </div>
      <div className='flex justify-center gap-16 mb-20'>
        <div className='yellowBG rounded-3xl'><img src='/man.png' alt=''/><span className='textFontImg'>Certified mechanics</span></div>
        <div className='yellowBG rounded-3xl '><img className='mx-auto' src='/bottle.png' alt=''/><span className='textFontImg'>High quality oil &<br/>filter change</span></div>
        <div className='yellowBG rounded-3xl'><img src='/house.png' alt=''/><span className='textFontImg'>Expert home service</span></div>
      </div>
    </div>
  )
}

export default Rates
