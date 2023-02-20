import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchUser from '../screens/SearchUser';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const Stack = createNativeStackNavigator()

const NavigateScreen = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  options={{ headerShown: false }} name='SearchUser' component={SearchUser} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  )
}

export default NavigateScreen

const styles = StyleSheet.create({})