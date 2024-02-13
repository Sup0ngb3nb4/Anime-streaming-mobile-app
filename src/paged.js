import React, { Component } from "react";
import { Text, View,StyleSheet,ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
const video = Asset.fromModule(require('./assets/paged.mp4'));
class Paged extends Component {



  render() {
    return (
      <View style={styles.container}>
         <View>
          
         <Video
        
        style={{height:202,width:360}}
        source={video}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
        <ImageBackground style={styles.imgb}source={require('./assets/blur1.png')}>
        <TouchableWithoutFeedback style={styles.bar}>
        <Text style={{ fontWeight: 'bold',color:'black',marginLeft:10,marginTop:6  }}>Reborn to Master the Blade From Hero-King to Extraordinary Squire</Text>
           </TouchableWithoutFeedback>
         <Text style={{fontSize:12,color:'white',marginTop:20 }} >
         What is Reborn to Master the Blade From Hero-King to Extraordinary Squire about?
 Hero-King Inglis, a divine knight and master of all he surveys, gazes down on the empire he built with his mighty hand.
  He has devoted his life to statecraft and his subjects’ well-being, but the one unfulfilled wish of the former warrior 
  is to live again, for himself this time: a warrior’s life he’d devoted himself to before his rise to power.
 
 His goddess, Alistia—a patron of heroes—listens to his prayer and smiles upon him, flinging his soul into the far future. Goddesses often work in mysterious ways, and Inglis is no exception: not only is Inglis now the daughter of a minor noble family but at her first coming-of-age ceremony at 6 she’s found ineligible to begin her knighthood.
         </Text>
         <Text style={{fontSize:12 ,color:'white'}} >
         However, for an ambitious individual like Inglis, this is more a challenge than a setback. “It’s not the blood that runs through your veins that makes a knight; it’s the blood you shed on the battlefield!” The curtain rises on the legend of an extraordinary woman who will master the blade!
 
 Source: Anime Collective rewrite
 The Reborn to Master the Blade From Hero-King to Extraordinary Squire anime is airing on early months of 2023.</Text>
         </ImageBackground>
       </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  imgb:{
    width:360,
    height:700
  },
  bar:{
    backgroundColor:'#F4CD39',
    width:360,
    height:50
  }
}) 
export default Paged;