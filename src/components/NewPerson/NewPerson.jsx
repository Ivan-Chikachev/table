import React from 'react';

const NewPerson = (props) => {
	let textId = React.createRef();
	let textFN = React.createRef();
	let textLN = React.createRef();
	let textEmail = React.createRef();
	let textPhone = React.createRef();
	let onTextChange = () => {
		let text1 = textId.current.value;
		let text2 = textFN.current.value;
		let text3 = textLN.current.value;
		let text4 = textEmail.current.value;
		let text5 = textPhone.current.value;
		props.setNewPerson(text1, text2, text3, text4, text5);
	};
	console.log(props.person.id);
	const push = () => {
		props.pushPerson(props.person);
		props.setNewPerson('', '', '', '', '');
	};
	const addPerson = () => {
		if (props.person.id === '') {
			return
		} else push();
	};
	return (
		<div className='new-person'>
			<input
				type='text'
				ref={textId}
				value={props.person.id}
				onChange={onTextChange}
				type='text'
				placeholder='Id..'
			/>
			<input
				type='text'
				ref={textFN}
				value={props.person.firstName}
				onChange={onTextChange}
				type='text'
				placeholder='Firstname..'
			/>
			<input
				type='text'
				ref={textLN}
				value={props.person.lastName}
				onChange={onTextChange}
				type='text'
				placeholder='Lastname..'
			/>
			<input
				type='text'
				ref={textEmail}
				value={props.person.email}
				onChange={onTextChange}
				type='text'
				placeholder='E-mail..'
			/>
			<input
				type='text'
				ref={textPhone}
				value={props.person.phone}
				onChange={onTextChange}
				type='text'
				placeholder='Phone..'
			/>
			<button onClick={addPerson}>Ок</button>
		</div>
	);
};
export default NewPerson;
