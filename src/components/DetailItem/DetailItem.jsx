import React from 'react';
const DetailItem = (props) => {
	const person = props.currentPerson;
	const address = person.address;
	return (
		<div className="person-info">
			<ul>
				<li className='title-about'><b>Выбран пользователь </b>{person.firstName} {person.lastName}</li>
				<li className='detail-name'><b>Город: </b><span>{address.city}</span></li>
				<li className='detail-name'><b>Штат: </b><span>{address.state}</span></li>
				<li className='detail-name'><b>Адрес проживания: </b><span>{address.streetAddress}</span></li>
				<li className='detail-name'><b>Индекс: </b><span>{address.zip}</span></li>
				<li className='detail-name'><b>Описание: </b></li>
				<li className='detail-name'><span>{person.description}</span></li>
			</ul>
		</div>
	);
};

export default DetailItem;
