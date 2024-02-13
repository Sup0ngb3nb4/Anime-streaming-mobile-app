import React, { Component } from 'react';
import WebView from 'react-native-webview';

import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";
    
   
 export default class App extends React.Component {
  render() {
    
    return (
      <View style={{height:800,width:360}}>
      <WebView
                   source={{ uri: 'https://www.webtoons.com/en/fantasy/the-academys-undercover-professor/episode-1/viewer?title_no=4636&episode_no=1' }}
                  
                  style={{ width: '100%', height: '100%' }}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
});


