import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Table, Row, TableWrapper,Rows } from 'react-native-table-component';
export default class HomeScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      widthArr: [40, 60, 80, 100, 120,100,100,100],
      tableHead: ['Name', 'Age', 'p.no', 'Gender','Address','pincode','state','nationality'],
      tableData: [
        ['anand', '22', '9080948631', 'Male','xxx,yyy','23454','tamilnadu','indian'],
        ['anand', '22', '9080948631', 'Male','xxx,yyy','23454','tamilnadu','indian']

       
      ]
    }
  }
 
 
  
  render(){
    const state = this.state;

  return (
    <View style={styles.container}>
        <ScrollView horizontal={true}>
    <Table borderStyle={{borderWidth: 4, borderColor: '#c8e1ff'}}>
      <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
      <Rows data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
    </Table>

   
    </ScrollView>
  </View>
   
  );
}}

const styles = StyleSheet.create({
  container: {  padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
   
HomeScreen.navigationOptions = {
  
};

