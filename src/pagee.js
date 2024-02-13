import React, { Component } from "react";
import { Text, View,StyleSheet,ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
const video = Asset.fromModule(require('./assets/pagee.mp4'));
class Pagee extends Component {



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
<Text style={{ fontWeight: 'bold',color:'black',marginLeft:10,marginTop:6 }}>Classroom for Heroes</Text>
 </TouchableWithoutFeedback>
<Text style={{fontSize:12,color:'white',marginTop:30 }} >
Studio: Actas

An upcoming Classroom for Heroes anime, which is adapted from the the action and fantasy light novel 
by Haruyuki Morisawa and Shin Araki, is confirmed. Actas (Girls & Panzer) is animating the anime.
</Text>
<Text style={{fontSize:12 ,color:'white'}} >
What is Classroom for Heroes about?
After striking a deal with the Demon King, Blade the brave hero gave up his powers and returned to school as an ordinary student. 
But then he discovers that the school he enrolled in is actually an elite academy for training heroes, and even without his powers
Blade's mental and physical skills are off the charts. Will Blade be able to enjoy a tranquil school life?
Classroom for Heroes is releasing at a TBD date in 2023.
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
export default Pagee;