import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SearchUser from './app/screens/SearchUser';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <SearchUser />
      </Provider>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})