import './Entry.css'
import destinationProps from '../assets-data/destinations'
import Destinations from './fragments/Destinations'

export default function Entery() {

    return (
      <article className='journal-entry'>
        <Destinations assetProps={destinationProps}/>
      </article>
    )
}