import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, ProfilePage, ContactsPage, IdlePage } from './pages';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="home-page" component={HomePage} options={{headerShown: false}} />
                <Stack.Screen name="profile-page" component={ProfilePage} options={{title: 'Profile'}} />
                <Stack.Screen name="contacts-page" component={ContactsPage} options={{title: 'Contacts'}} />
                <Stack.Screen name="idle-page" component={IdlePage} options={{headerShown: false}} />
              </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  );
};

export default App;