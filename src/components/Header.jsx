import globe from '../assets/africa-1299545.svg'
import './Header.css'

function Header() {
    return (
        <header>

            <img className='globe' src={globe} alt="globe logo" />

            <h1 className='travel-journal'>
                Travel Journal
            </h1>
            
        </header>
    )
}

export default Header