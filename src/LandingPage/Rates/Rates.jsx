import "./Rates.css";

const Rates = ({ language }) => {
  return (
    <div className="rates-container">
      <div className="aboutTopLine">
        <div className="aboutrightline"></div>
        <div className="aboutrightline"></div>
        <div className="aboutrightline"></div>
      </div>
      <div className="ratesFirstHeading textColor">
        First class car attention
      </div>
      <div className="ratesSecondHeading textFont">
        at home & at affordable rates
      </div>
      <div className="ratesDescription">
        {language == "es" ? (
          <span>
          Trabajamos como un servicio de entrega, ¡excepto que nos ocupamos de la salud de tu auto!<br />
           Contamos con mecánicos de alto nivel a una fracción del precio que ofrecen los talleres,<br />
            con todas las herramientas y experiencia necesarias para poner tu auto al día con todas las normativas <br />
             y protocolos de seguridad.¡Reservar con nosotros es rápido, fácil y, sobre todo, estamos aquí para servirte!
          </span>
        ) : (
          <span>
            We work just like a delivery service, except for matters of health
            for your car! Expect a<br />
            high level mechanic at a fraction of the price offered by car
            workshops, with all the tools
            <br />
            & expertise needed to bring your car up to speed on all regulations
            and safety protocols.
            <br />
            Booking with us is fast, easy and above all, we are here to serve
            you!
          </span>
        )}
      </div>
      <div className="diffRates">
        <div className="yellowBG">
          <img src="/man.png" alt="" />
          <span className="textFontImg">Certified mechanics</span>
        </div>
        <div className="yellowBG ">
          <img className="mx-auto" src="/bottle.png" alt="" />
          <span className="textFontImg">
            High quality oil &<br />
            filter change
          </span>
        </div>
        <div className="yellowBG">
          <img src="/house.png" alt="" />
          <span className="textFontImg">Expert home service</span>
        </div>
      </div>
    </div>
  );
};

export default Rates;
