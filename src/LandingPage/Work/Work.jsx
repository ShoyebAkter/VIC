import './Work.css'

const Work = ({language}) => {
  return (
    <div id='service' className='workContainer'>
      <div className="leftLine">
        <div className="yellowline"></div>
      </div>
      <div className="newdescription">
        <div className="howToDo">{
          language === 'es' ? <span>Cómo lo hacemos</span>:<span>How we do it </span>
        }</div>
        <div className="myWorkdescription">
          {
            language ==='es'?
            <span>
            Con un equipo de herramientas y materiales de primera calidad, llegamos hasta tu ubicación para realizar cambios de aceite, filtros y fluidos de manera rápida y eficiente. Nuestro objetivo es proporcionarte un servicio confiable y conveniente sin que tengas que salir de casa.
            </span>
            :
            <span>
            With a set of top-quality tools and materials, we come to your location to perform oil changes, filter replacements, and fluid services quickly and efficiently. Our goal is to provide you with reliable and convenient service without you having to leave your home.
            </span>
          }
        </div>
      </div>
      <div className="bottomLine">
        <div className="rightline1"></div>
        <div className="rightline2"></div>
      </div>
    </div>
  )
}

export default Work
