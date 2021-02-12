import React from 'react';
import {Field, reduxForm} from "redux-form";

const Search = (props) => {

     let add = (values) => {
		props.sendSearchText(values.searchText)
		props.setCurrentPage(1)
     }

	return (
		<div className='search'>
			<SearchReduxForm  onSubmit = {add} add={add}/>
		</div>
	);
};
const SearchForm = (props) => {

	return(
		<form onSubmit={props.handleSubmit}>
			<Field
				component={'input'}
				name={'searchText'}
				type="text"
				placeholder='Поиск..'
				onKeyPress={'Enter'?props.add:null}
			/>
			<button className="btn">Поиск</button>
		</form>
	)
}
const SearchReduxForm = reduxForm({form: 'addNewMassage'})(SearchForm)

export default Search;
