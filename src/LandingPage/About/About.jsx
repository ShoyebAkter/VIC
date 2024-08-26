import "./About.css";
const About = ({ language }) => {
  return (
    <div id="about" className="about-container">
      <div className="aboutTopLine">
        <div className="aboutrightline"></div>
        <div className="aboutrightline"></div>
        <div className="aboutrightline"></div>
      </div>
      <div className="aboutLine">
        <div className="aboutLeftline"></div>
      </div>
      <div className="description">
        <div className="aboutme">About me</div>
        <div className="mydescription">
          {language == "es" ? (
            <span>
              Soy Carlos Carvajal, un mecánico certificado con años de
              experiencia trabajando en Hertz.
              <br />
              Ahora estoy emprendiendo mi propio negocio de servicios
              automotrices a domicilio en Orlando,
              <br />
              Florida. Con VIC, quiero ofrecerte la comodidad de un servicio de
              alta calidad directamente
              <br />
              en tu hogar o lugar de trabajo.
            </span>
          ) : (
            <span>
              I am Carlos Carvajal, a certified mechanic with 10 years of
              experience working at Hertz.<br/> Now, I am starting my own mobile
              automotive service business in Orlando, Florida.<br/> With VIC, I aim
              to provide you with the convenience of high-quality service right<br/>
              at your home or workplace
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
