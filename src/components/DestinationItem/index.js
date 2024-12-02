// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {imgUrl, name} = placeDetails

  return (
    <li className="place-card">
      <img src={imgUrl} alt={name} className="place-image" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
