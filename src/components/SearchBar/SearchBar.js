import React from 'react'; 
import './SearchBar.css';

//search bar should allow users to search business with filters: best match, highest rating, most reviewed. 
//creating object with keys/vales that confirm to API expectations. 

const sortByOptions = {
	"Best Match" : "best_match", 
	"Highest Rated" : "rating", 
	"Most Reviewed" : "review_count"
}; 

class SearchBar extends React.Component {
	renderSortByOptions() {
		//iterate through keys/values of sortByOptions and return a list item 
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption]; 
			return <li key = {sortByOptionValue}>{sortByOption}</li>
		}); 
	}

	render() {
		return (
		<div class="SearchBar">
  		<div class="SearchBar-sort-options">
    		<ul>
    		{this.renderSortByOptions()}
		</ul>
  		</div>
  		<div className="SearchBar-fields">
    		<input placeholder="Search Businesses" />
    		<input placeholder="Where?" />
  		</div>
  		<div className="SearchBar-submit">
    		<a>Let's Go</a>
  		</div>
		</div>

		);
	}
}

export default SearchBar;
