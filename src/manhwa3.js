import React, { Component } from 'react';
import WebView from 'react-native-webview';

import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";
    
   
 export default class manhwa3 extends React.Component {
  render() {
    
    return (
      <View style={{height:800,width:360}}>
      <WebView
                   source={{ uri: 'https://www.webtoons.com/en/fantasy/the-dark-lords-confession/ep-1-lighting-the-damned-candle-1/viewer?title_no=4464&episode_no=1' }}
                  
                  style={{ width: '100%', height: '100%' }}
                />
      </View>
    );
  }
}



