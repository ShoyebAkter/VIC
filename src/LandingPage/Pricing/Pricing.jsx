import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricingContainer">
      <div className="centerLine">
        <div className="centeryellowline"></div>
      </div>
      <div className="topLine">
        <div className="toprightline1"></div>
        <div className="toprightline2"></div>
      </div>
      <div className="priceTag">Pricing</div>
      <div className="priceDescription">
        Our prices are competitive and transparent. We offer various packages
        and personalized services according to your needs. Contact us for a
        detailed and no-obligation quote
      </div>
      <div className="contactButton">Contact Us</div>
    </div>
  );
};

export default Pricing;
