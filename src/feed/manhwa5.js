import * as React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground,} from 'react-native';
import { WebView } from 'react-native-webview';
export default function Ai() {
 
  return (
    <View style={{height:800,width:360}}>
       
       <WebView
                   source={{ uri: 'https://www.webtoons.com/en/sf/if-ai-ruled-the-world/ep-1-test-1/viewer?title_no=2605&episode_no=2' }}
                  style={{ width: '100%', height: '100%' }}
                />
    </View>
  );
}