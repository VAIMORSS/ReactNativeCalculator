import React, { Component } from 'react';
import { Text, 
         View,
         AppRegistry } from 'react-native';



export default class DocPet extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <View style={{flex: 2, backgroundColor: '#193441'}}></View>
          <View style={{flex: 8, backgroundColor: '#3E606F'}}></View>
      </View>
  );
  }

}
