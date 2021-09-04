import React from 'react'; 
import './SearchBar.css';

//search bar should allow users to search business with filters: best match, highest rating, most reviewed. 
//creating object with keys/vales that confirm to API expectations. 

class SearchBar extends React.Component {
	constructor(props) {
		super(props); 
		this.state={
			term: '',
			location: '',
			sortBy: 'best-match'
		};
		this.handleTermChange = this.handleTermChange.bind(this); 
		this.handleLocationChange = this.handleLocationChange.bind(this);  
		this.handleSearch = this.handleSearch.bind(this);  
		this.sortByOptions = {
        	"Best Match" : "best_match",
        	"Highest Rated" : "rating",
        	"Most Reviewed" : "review_count"
		};	
	}

	
	getSortByClass(sortByOption){
		if (this.state.sortBy === sortByOption) return 'active';
		else return ''; 
	}

	handleSortByChange(sortByOption) {
		this.setState({sortBy: sortByOption});
	}

	handleTermChange(event){
		this.setState({term: event.target.value});
	}

	handleLocationChange(event){
		this.setState({location : event.target.value});
	} 

	 renderSortByOptions() {
                //iterate through keys/values of sortByOptions and return a list item
                return Object.keys(this.sortByOptions).map(sortByOption => {
                        let sortByOptionValue = this.sortByOptions[sortByOption];
                        return <li className={this.getSortByClass(sortByOptionValue)} onClick = {this.handleSortByChange.bind(this,sortByOptionValue)} key = {sortByOptionValue}>{sortByOption}</li>
                });
        }


	handleSearch(event) {
		this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
		event.preventDefault(); 
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
    		<input onChange={this.handleTermChange}  placeholder="Search Businesses" />
    		<input onChange={this.handleLocationChange}  placeholder="Where?" />
  		</div>
  		<div onClick={this.handleSearch} className="SearchBar-submit">
    		<a>Let's Go</a>
  		</div>
		</div>

		);
	}
}

export default SearchBar;
