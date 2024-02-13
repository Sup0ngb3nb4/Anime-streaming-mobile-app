import React, { Component } from "react";
import { Text, View,StyleSheet,ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';
export default class pageb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
}


  render() {
    return (
      <View style={styles.container}>
         <ScrollView vertical={true} style={{backgroundColor:'#1D2A3D'}} >
         <View>
          
          <YoutubePlayer
         height={200}
         play={false}
         videoId={'aRh-71OzkRg'}
       />
       <ImageBackground style={styles.imgb}source={require('./src/assets/blur1.png')}>
       <TouchableWithoutFeedback style={styles.bar}>
       <Text style={{ fontWeight: 'bold',color:'black' ,marginLeft:10,marginTop:6 }}>Mashle</Text>
           </TouchableWithoutFeedback>
         <Text style={{fontSize:12,color:'white' }} >
         An upcoming Mashle anime is confirmed by Aniplex. Mashle is adapted from the manga Mashle: Magic and Muscles by Hajime Komoto,
          which is one of my favorite comedy manga. On top of being a comedy, it is also a supernatural and action story.
 The team behind the anime have yet to be revealed, but we will keep you posted as we learn more.
         </Text>
         <Text style={{fontSize:12 ,color:'white'}} >
         What is Mashle about?
 Mashle is about a magic-less guy named Mash, who lives in a magical world. What he lacks in magic though, he makes up for in brute strength.
 Magic is everything in the world of Mashle and those with the best magic skills have the highest social status. Deep in the forest lives Mash
 , who has been training for years and is now incredibly fit. However, he has no idea that there’s a whole world outside of his forest home.
 When he’s discovered and is forced to attend magic school, he’ll need to compete with his fellow students in order to become one of the 
 Divine Visionaries—students at the top of their class who are revered by everyone. But since Mash doesn't know how to use magic at all, 
 it looks like he'll be forced to fight his way to the top instead.
 The Mashle anime is releasing at a TBD date in April 2023.
 </Text>
         </ImageBackground>
       </View>
       </ScrollView>
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
    height:400
  },
  bar:{
    backgroundColor:'#F4CD39',
    width:360,
    height:40
  }
})