import axios from 'axios';

const client = axios.create({
	baseURL: '',
	timeout: 5000
});

const createUser = async ({firstName, lastName, contacts}) => {
	const response = await client.post('/', {
		firstName,
		lastName,
		contacts
	});

	return response;
};

export default {
	createUser
};