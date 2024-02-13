import React, { Component } from 'react';
import WebView from 'react-native-webview';

import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";
    
   
 export default class manhwa2 extends React.Component {
  render() {
    
    return (
      <View style={{height:800,width:360}}>
      <WebView
                   source={{ uri: 'https://www.webtoons.com/en/action/omniscient-reader/episode-1/viewer?title_no=2154&episode_no=2' }}
                  
                  style={{ width: '100%', height: '100%' }}
                />
      </View>
    );
  }
}



