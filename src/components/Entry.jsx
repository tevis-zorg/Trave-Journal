import mtFuji from '../assets/mount-fuji-8010752_640.jpg'
import operaHouse from '../assets/opera-house-4826177_640.jpg'
import geiRanger from '../assets/norway-7427120_640.jpg'
import locMarker from '../assets/map-9256471.svg'
import './Entry.css'

export default function Entery() {
    return (
        <div className="destionation-card">

        <div className="place-card">
            <img className='location' src={mtFuji} alt="mount fuji" />

            <span className='card-body'>
                <img className='pin-loc' src={locMarker} alt="location marker" />
            <p>
                Japan
                <a href="" className="fuji-loc"> View on Google Maps</a>
            </p>

            <h2>
                Mount Fuji
            </h2>
            </span>

        </div>

        <div className="place-card">
          <img className='location' src={operaHouse} alt="opera house" />

          <span className='card-body'>
            <img className='pin-loc' src={locMarker} alt="location marker" />
            <p>
                Sydney
                <a href="" className="sydney-loc"> View on Google Maps</a>
            </p>
            <h2>
                Sydney, Opera House
            </h2>
          </span>

        </div>

        <div className="place-card">
          <img className='location' src={geiRanger} alt="geirangfjord fall" />

          <span className='card-body'>
            <img className='pin-loc' src={locMarker} alt="location marker" />
            <p>
                Gierangerfjor
                <a href="" className="gierangerfjord-loc"> View on Google Maps</a>
            </p>
            <h2>
                Geirangerfjord
            </h2>
          </span>

        </div>
        
      </div>
    )
}