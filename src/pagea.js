import React, { Component } from "react";
import { Text, View,StyleSheet,ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
const video = Asset.fromModule(require('./assets/pagea.mp4'));
class Pagea extends Component {


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
          <Text style={{ fontWeight: 'bold',color:'black',marginLeft:10,marginTop:6  }}>Solo Leveling</Text>
          </TouchableWithoutFeedback>
        <Text style={{fontSize:12,color:'white' }} >
        An upcoming Solo Leveling anime is confirmed by Crunchyroll! It was announced during Crunchyroll’s Anime Expo 2022 Industry Panel.
         A-1 Pictures (Sword Art Online, Kaguya-sama: Love is War) is animating the series. Shunsuke Nakashige (Sword Art Online: Alicization)
          is directing the series and Tomoko Sudo (Alice in Borderland OVA) is doing the character designs. Hiroyuki Sawano 
          (Attack on Titan, Kill la Kill) is composing and writing the music for Solo Leveling.
          DUBU, who created the manhwa, had the following to say about the upcoming adaptation, "Solo Leveling is finally making its
           anime debut. It feels like only yesterday that we got the offer for the anime adaptation. I feel so overwhelmed when I think 
           that the anime is really being created right now. This is all thanks to you fans who love and support Solo Leveling. 
           I'm filled with gratitude."
        </Text>
        <Text style={{fontSize:12 ,color:'white'}} >
        What is Solo Leveling about?
Solo Leveling follows the weakest hunter Jinwoo Sung, who despite this fact, continues to head out on raids because he needs
 to find a way to pay for his family's growing debt. His party stumbles into trouble one day when they come face-to-face with a
  being whose power outranks anything he’s ever seen. While fighting for his life, the System offers him an unexpected chance to
   become a "Player," which opens him up to a whole new world of possibilities.
The Solo Leveling anime is releasing at a TBD date in 2023.
        </Text>
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
    height:40
  }
})
export default Pagea;