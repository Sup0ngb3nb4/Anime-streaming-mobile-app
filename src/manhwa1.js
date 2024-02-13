import React, { Component } from 'react';
import WebView from 'react-native-webview';

import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";
    
   
 export default class manhwa1 extends React.Component {
  render() {
    
    return (
      <View style={{height:800,width:360}}>
      <WebView
                   source={{ uri: 'https://www.webtoons.com/en/action/the-god-of-high-school/ep-1/viewer?title_no=66&episode_no=1' }}
                  
                  style={{ width: '100%', height: '100%' }}
                />
      </View>
    );
  }
}


