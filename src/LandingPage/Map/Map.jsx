import "./Map.css";
const Map = ({language}) => {
  return (
    <div className="mapContainer">
    <div className="orlando">
    <img className="mapLogo" src="/logo2.png" alt=""/>
    </div>
      <div className="infoDiv">
        <div className="workLine">
          <div className="rightline"></div>
        </div>
        <div className="workSection">
          <div className="workPlace">Where we work</div>
          <div className="workDescription">
          {
            language=== 'es'?
            <span>
            Ofrecemos nuestros servicios en toda el área de Orlando, Florida, y sus alrededores. No importa dónde te encuentres en esta región, llegaremos hasta ti para asegurarnos de que tu vehículo esté en las mejores condiciones.
            </span>:
            <span>
            We offer our services throughout the Orlando, Florida area and its
            surroundings. No matter where you are in this region, we will come
            to you to ensure your vehicle is in the best condition
            </span>
          }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
