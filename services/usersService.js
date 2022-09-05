import axios from 'axios';
import 'react-native-get-random-values';
import { v4 } from 'uuid';

const client = axios.create({
	baseURL: 'https://39eb49ae41f748febb53d209417b9092.francecentral.azure.elastic-cloud.com/search-users/_doc',
	timeout: 5000,
	headers: {
		Authorization: 'ApiKey ZzV4eUNJTUJ2SWZVOVVlV0JrMGs6VFpRSkxMWnVTYXE3SE4wUXBRenpCZw=='
	}
});

const createUser = async ({firstName, lastName, contacts}) => {
	const response = await client.post('/', {
		id: v4(),
		name: `${firstName} ${lastName}`,
		contacts: contacts.map(({name, phoneNumber}) => ({
			[name]: phoneNumber
		})),
		phone: v4()
	});

	console.log(response);

	return response;
};

export default {
	createUser
};