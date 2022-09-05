/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage, ProfilePage, ContactsPage, IdlePage } from './pages';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="home-page" component={HomePage} />
                <Stack.Screen name="profile-page" component={ProfilePage} />
                <Stack.Screen name="contacts-page" component={ContactsPage} />
                <Stack.Screen name="idle-page" component={IdlePage} />
              </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;