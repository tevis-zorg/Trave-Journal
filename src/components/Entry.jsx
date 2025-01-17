import mtFuji from '../assets/mount-fuji-8010752_640.jpg'
import operaHouse from '../assets/opera-house-4826177_640.jpg'
import geiRanger from '../assets/norway-7427120_640.jpg'
import locMarker from '../assets/map-9256471.svg'
import './Entry.css'

export default function Entery() {
  const fujiLoc = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu";
  const operaHouseLoc = "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu";
  const geiRangerLoc = "https://www.google.com/maps/place/Geirangerfjord/@62.1048242,6.9922377,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D";
    return (
      <article className='journal-entry'>

        <div className="destionation-card">

          <div className="place-card">
              <img className='location' src={mtFuji} alt="mount fuji" />

              <span className='card-body'>
                  <img className='pin-loc' src={locMarker} alt="location marker" />
                  Japan
                  <a href={fujiLoc} className="fuji-loc"> View on Google Maps</a>
                  <h2>Mount Fuji</h2>
                  <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Similique aperiam a tenetur doloribus ipsa animi ullam! Impedit quis, 
                    dignissimos iusto, sequi iste esse, quod veniam repudiandae voluptate consequatur adipisci doloremque?
                  </p>
              </span>
          </div>

          <div className="place-card">
            <img className='location' src={operaHouse} alt="opera house" />
            <span className='card-body'>
              <img className='pin-loc' src={locMarker} alt="location marker" />
              Sydney
              <a href={operaHouseLoc} className="sydney-loc"> View on Google Maps</a>
              <h2>Sydney, Opera House</h2>
              <strong>27 May, 2021 - 8 Jun, 2021</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat et, sequi laborum asperiores veritatis quidem?
                Nisi officiis minima saepe dolorum. 
                Fuga accusamus deleniti reiciendis incidunt consequuntur maxime sapiente asperiores aut.
              </p>
            </span>
          </div>

          <div className="place-card">
            <img className='location' src={geiRanger} alt="geirangfjord fall" />
            <span className='card-body'>
              <img className='pin-loc' src={locMarker} alt="location marker" />
              Gierangerfjord
              <a href={geiRangerLoc} className="gierangerfjord-loc"> View on Google Maps</a>
              <h2>Geirangerfjord</h2>
              <strong>01 Oct, 2021 - 18 Nov 2021</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellat, totam distinctio corrupti voluptatibus quis porro 
                consectetur laborum? Molestiae facere vero fugit consectetur, 
                alias, vel odit harum, corrupti quibusdam eligendi aperiam.
              </p>
            </span>
          </div>
        
      </div>
      </article>
    )
}