import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import AddItem from './src/components/addItem'
import ItemsList from './src/components/ItemsList'

export default class App extends Component {
  render() {
    return (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1, backgroundColor: '#FFE74C' }}>
        <ItemsList />
        <AddItem />
    </View>
  </Provider>
    );
  }
}



