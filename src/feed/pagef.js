import React, { Component } from "react";
import { Text, View,StyleSheet,ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';
export default class pagef extends Component {
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
        videoId={'b1_NJkmu8cs'}
      />
      <ImageBackground style={styles.imgb}source={require('./src/assets/blur1.png')}>
        <TouchableWithoutFeedback style={styles.bar}>
          <Text style={{ fontWeight: 'bold',color:'black',marginLeft:10,marginTop:6  }}>Solo Leveling</Text>
          </TouchableWithoutFeedback>
        <Text style={{fontSize:12,color:'white' }} >
        Season 3 of KonoSuba is currently in production! In May 2022, Kadokawa announced that the third season is set to premiere.

An exact airing date has not been released, but we estimate that Season 3 could air as early as January 2023.

Along with the third season announcement, Kadokawa stated that a KonoSuba spin-off anime series is also in production.

The spin-off novel KonoSuba: An Explosion on This Wonderful World! is being adapted into an anime.

An announcement date for the spin-off series has not been confirmed, and it will likely air in late 2023.

The entire KonoSuba series is available to watch on Crunchyroll.

Season 3 and the KonoSuba spin-off series will likely simulcast on Crunchyroll when they air.
        </Text>
        <Text style={{fontSize:12 ,color:'white'}} >
        It’s been confirmed that the production studio behind KonoSuba has changed. Season 3 of KonoSuba is being handled by studio Drive, which is also animating the new KonoSuba spin-off.

The director of the previous seasons, Takaomi Kanasaki, serves as chief director for the new season. The new series director, Yujiro Abe, is the episode director for the series Kaguya-sama: Love is War.

Makoto Uezu returns for the series composition, and Koichi Kikuta returns as the series character designer. The same Season 3 staff will work on the spin-off series KonoSuba: An Explosion on This Wonderful World!, most likely airing in late 2023.
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