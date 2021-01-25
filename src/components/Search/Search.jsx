import React from 'react';

const Search = (props) => {
     let newText = React.createRef();
     let add = () => {
		props.sendSearchText()
		props.setCurrentPage(1)
     }
     let onTextChange = () => {
        let text = newText.current.value;
        props.updateText(text);
      };
	return (
		<div className='search'>
			<input
				ref={newText}
				value={props.newText}
				onChange={onTextChange}
				type='text'
				placeholder='Поиск..'
				onKeyPress={'Enter'?add:null}
			/>
			<button  onClick={add}>Поиск</button>
		</div>
	);
};

export default Search;
