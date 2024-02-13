import React, { Component } from "react";
import { Text, View,StyleSheet,ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
const video = Asset.fromModule(require('./assets/pagec.mp4'));
class Pagec extends Component {



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
         <Text style={{ fontWeight: 'bold',color:'black' ,marginLeft:10,marginTop:6 }}>Spy Classroom</Text>
           </TouchableWithoutFeedback>
         <Text style={{fontSize:12,color:'white',marginTop:20 }} >
         An upcoming Spy Classroom anime is confirmed by the official site. The anime is adapted from the Spy Classroom light novels, 
         an action, comedy and mystery series, that began releasing in 2020. The light novels received a manga adaptation that released 
         in 2020 as well.
 Spy Classroom is animated by feel., who worked on My Teen Romantic Comedy SNAFU Climax! and Hinamatsuri in the past.
         </Text>
         <Text style={{fontSize:12 ,color:'white'}} >
         What is Spy Classroom about?
 When every country in the world engages in a shadowy war of espionage, there will always be work for those who are willing
  to take on the risks. To answer the call, the world's greatest spy creates an organization dedicated to tackling missions 
  considered impossible though it remains to be seen why the seven members of this group all have no experience.
 The Spy Classroom anime is airing on January 5, 2023.
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
export default Pagec;