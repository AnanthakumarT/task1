import React from 'react';
import { ScrollView,View, StyleSheet,Alert,Button ,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const data =require('../example_1.json');
export default class  LinksScreen extends React.Component {

  handle=()=>{

    var json=data.details.fruit;
    Alert.alert('json text',json)
    
  }
  render(){
      return (
    <View>

      <Text></Text>
      <Button title="click" onPress={this.handle}/>
    </View>
  );
}
}


