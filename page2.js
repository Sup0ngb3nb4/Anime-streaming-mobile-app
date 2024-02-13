import React, { Component } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";

class Manhwa extends Component {
  render() {
    return (
      <ScrollView style={{}}>
      <View style={{marginTop:2,
    flexDirection: "row",}}>
       
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("God of Highschool")} style={{
    width: 178,
    height: 250,}} >
      <ImageBackground source={require('./src/assets/goh.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
    </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Omniscient Reader")} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/or.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
       
      <TouchableOpacity  onPress={()=>this.props.navigation.navigate("The Dark Lord's Confession")} style={{
    width: 178,
    height: 250,}} >
      <ImageBackground source={require('./src/assets/dlc.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
    </TouchableOpacity>

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("The Academy's Undercover Professor")} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/aup.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
    </View>
      <View style={styles.container}>
       
      <TouchableOpacity  onPress={()=>this.props.navigation.navigate("If Ai Ruled The World")} style={{
    width: 178,
    height: 250}} ><ImageBackground source={require('./src/assets/ai.png')} style={{width:'100%',height:'100%'}}></ImageBackground></TouchableOpacity>

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Teenage Mercenary")} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/Me.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
    </View>
    <View style={{height:100,width:360}}></View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:7,
    flexDirection: "row",
  },
  innerViewContainer: {
    marginLeft:6,
    width: 176,
    height: 250,
  },
});

export default Manhwa;