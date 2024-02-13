

import * as React from 'react';
import { TouchableOpacity,View, Text, StyleSheet, Button, ImageBackground,} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
import {  TouchableWithoutFeedback } from "react-native-gesture-handler";
export default function Anime1() {
  const video1 = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const video = Asset.fromModule(require('./assets/sr.mp4'));
  return (
    <View style={{height:1000,width:360}}>
       
       
      <Video
        ref={video1}
        style={{height:202,width:360}}
        source={video}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
     
      <ImageBackground style={{height:500, width:360,backgroundColor:'#252626'}}>
      <ImageBackground style={{ height:160, width:360,backgroundColor:'#252626'}} >
      <TouchableOpacity style={{backgroundColor:'#C7CFCF',borderRadius:20,borderColor:'#252626',borderWidth:1 ,marginLeft:4,marginTop:4,width:100,height:30}}
          onPress={() =>
            status.isPlaying ? video1.current.pauseAsync() : video1.current.playAsync()
          }
        >
            <Text style={{fontSize:15 ,marginLeft:30,marginTop:2}}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback style={{marginTop:50, borderColor:'#C7CFCF',borderWidth:1,backgroundColor:'#252626', marginLeft:0,height:190,width:360}}>
        <TouchableOpacity style={{marginTop:10,borderRadius:7,backgroundColor:'#C7CFCF', marginLeft:14,height:30,width:85}}>
            <Text style={{marginLeft:8,marginTop:4}}>Episode 1</Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
        </ImageBackground>
     
      
      </ImageBackground>
    </View>
  );
}