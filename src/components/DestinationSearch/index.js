// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            onChange={this.onSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="place-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} placeDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
