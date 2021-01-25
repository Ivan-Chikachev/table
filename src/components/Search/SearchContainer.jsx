import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { sendSearchText, updateText, setFiltred } from '../../redux/search-reducer';
import { setCurrentPage } from '../../redux/pagination-reducer';

class SearchContainer extends React.Component {
	componentDidMount() {}
	render() {
		const getFiltredData = () => {
			if (!this.props.searchText) return this.props.persons;

			return this.props.persons.filter((el) => {
				return (
					el['firstName'].toLowerCase().includes(this.props.searchText.toLowerCase()) ||
					el['lastName'].toLowerCase().includes(this.props.searchText.toLowerCase()) ||
					el['email'].toLowerCase().includes(this.props.searchText.toLowerCase())
				);
			});
		};
		const filtredData = getFiltredData();
		this.props.setFiltred(filtredData);

		return (
			<Search
				setCurrentPage={this.props.setCurrentPage}
				searchText={this.props.searchText}
				newText={this.props.newText}
				sendSearchText={this.props.sendSearchText}
				updateText={this.props.updateText}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	newText: state.search.newText,
	searchText: state.search.searchText,
	persons: state.tablePage.persons
});

export default connect(mapStateToProps, {
	sendSearchText,
	updateText,
	setFiltred,
	setCurrentPage
})(SearchContainer);