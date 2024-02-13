import React, { Component } from 'react';
import WebView from 'react-native-webview';

import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";
    
   
 export default class manga3 extends React.Component {
  render() {
    
    return (
      <View style={{height:800,width:360}}>
      <WebView
                   source={{ uri: 'https://chapmanganato.com/manga-sp951798/chapter-1' }}
                  
                  style={{ width: '100%', height: '100%' }}
                />
      </View>
    );
  }
}


