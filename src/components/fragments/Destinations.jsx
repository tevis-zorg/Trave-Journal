import locMarker from '../../assets/loc-marker.svg'

const Destinations = (props) => {
  return (
    <>

      <div className="destination-card">
        {props.assetProps.map((data) => (
          <div className="place-card" key={data.id}>

            <img src={data.image} alt="" className="location" />

            <span className="card-body">

              <img src={locMarker} alt="" className="pin-loc" />

              {data.country}

              <a href={data.location}>
                View on Google Maps
              </a>

              <h2>
                {data.destination}
              </h2>

              <p>
                {data.description}
              </p>

            </span>

          </div>

        ))}
      </div>


      {/* <div className="place-card">
      
        <img className='location' src={image} alt={altImgName} />

        <span className='card-body'>

            <img className='pin-loc' src={markerLogo} alt="location marker" />
            
            {destName}

            <a href={loc} className={destLoc}> 
              View on Google Maps
            </a>

            <h2>
              {destSite}
            </h2>

            <strong>
              {schedule}
            </strong>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Similique aperiam a tenetur doloribus ipsa animi ullam! Impedit quis, 
              dignissimos iusto, sequi iste esse, quod veniam repudiandae voluptate consequatur adipisci doloremque?
            </p>
            
        </span>

      </div> */}

    </>
  )
}

export default Destinations;