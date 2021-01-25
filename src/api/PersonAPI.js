import * as axios from 'axios';

const instanceSmall = axios.create({
	baseURL:
		'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
});
const instanceBig = axios.create({
	baseURL:
		'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
});

export const personsAPI = {
	getPersons(i) {
		if (i === 'small') {
			return instanceSmall.get().then((response) => {
				return response.data;
			});
		} else if (i === 'big') {
			return instanceBig.get().then((response) => {
				return response.data;
			});
		}
	}
};
