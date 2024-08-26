import "./Pricing.css";

const Pricing = ({language}) => {
  return (
    <div id="pricing" className="pricingContainer">
      <div className="centerLine">
        <div className="centeryellowline"></div>
      </div>
      <div className="topLine">
        <div className="toprightline1"></div>
        <div className="toprightline2"></div>
      </div>
      <div className="priceTag">Pricing</div>
      <div className="priceDescription">
      {
        language ==='es'?
        <span>Nuestros precios son competitivos y transparentes.<br/>
         Ofrecemos diferentes paquetes y servicios personalizados según tus necesidades.<br/> Contáctanos para obtener una cotización detallada y sin compromiso.</span>
        :
        <span>Our prices are competitive and transparent.<br/> We offer various packages
        and personalized services according to your needs.<br/> Contact us for a
        detailed and no-obligation quote</span>
      }
        
      </div>
      <div className="contactButton">Contact Us</div>
    </div>
  );
};

export default Pricing;
