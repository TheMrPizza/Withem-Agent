import React, { useState } from 'react';
import { ListItem, TextInput, Button} from '@react-native-material/core';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ContactsPage = () => {
	const [contacts, setContacts] = useState([]);
	const [isEditor, setIsEditor] = useState(false);

	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const toggleEditor = () => {
		setIsEditor(editor => !editor);
	};

	const onAddContact = () => {
		const newContact = {name, phoneNumber};
		setContacts(prevContacts => [...prevContacts, newContact]);
		setName();
		setPhoneNumber();
		toggleEditor();
	};

	return (
		<View style={styles.container}>
			{
				contacts.map(({name, phoneNumber}) => (
					<ListItem key={phoneNumber} title={name} secondaryText={phoneNumber} />
				))
			}

			{
				isEditor ? (
					<View>
						<View style={styles.textInputs}>
							<TextInput
								value={name}
								onChangeText={setName}
								style={{width: '30%'}}
								color='#3651a5'
							/>

							<TextInput
								value={phoneNumber}
								onChangeText={setPhoneNumber}
								style={{width: '65%'}}
								keyboardType='numeric'
								color='#3651a5'
							/>
						</View>

						<View style={styles.editorButtons}>
							<Button
								title="Add"
								uppercase={false}
								color='#3651a5'
								onPress={onAddContact}
							/>

							<Button
								title="Cancel"
								variant="text"
								uppercase={false}
								color='#3651a5'
								onPress={toggleEditor}
							/>
						</View>
					</View>
				) : (
					<TouchableOpacity style={styles.addButton} onPress={toggleEditor}>
						<Text style={styles.buttonText}>+ Add Contact</Text>
					</TouchableOpacity>
				)
			}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		alignSelf: 'center',
		paddingTop: 20
	},
	textInputs: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 20
	},
	addButton: {
		justifyContent: 'flex-end',
		borderRadius: 20,
		backgroundColor: '#3651a5',
		alignItems: 'center',
		top: 10,
		alignSelf: 'flex-start',
		paddingLeft: 10,
		paddingRight: 10,
	},
	editorButtons: {
		flexDirection: 'row',
		paddingTop: 10
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	}
});

export default ContactsPage;