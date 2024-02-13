import React, { Component } from "react";
import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";

class Anime extends Component {
  nav1=()=>{
    this.props.navigation.navigate("No Game No Life")
}
nav2=()=>{
  this.props.navigation.navigate("The Promised Neverland")
}
nav3=()=>{
  this.props.navigation.navigate("OverLord")
}
nav4=()=>{
  this.props.navigation.navigate("That time I got Reincarnated as a Slime")
}
nav5=()=>{
  this.props.navigation.navigate("Summertime Render")
}
nav6=()=>{
  this.props.navigation.navigate("One Punch Man")
}
  render() {
    return (
      <ScrollView>
      <View style={{marginTop:2,
    flexDirection: "row",}}>
       
        <TouchableOpacity onPress={ this.nav1} style={{
    width: 178,
    height: 250,}} >
      <ImageBackground source={require('./src/assets/ngnl.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
    </TouchableOpacity>

        <TouchableOpacity onPress={ this.nav2} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/pn.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
       
      <TouchableOpacity onPress={ this.nav3} style={{
    width: 178,
    height: 250,}} >
      <ImageBackground source={require('./src/assets/Overlord.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
    </TouchableOpacity>

        <TouchableOpacity onPress={ this.nav4} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/slime.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
    </View>
      <View style={styles.container}>
       
      <TouchableOpacity onPress={ this.nav5} style={{
    width: 178,
    height: 250}} ><ImageBackground source={require('./src/assets/sr.png')} style={{width:'100%',height:'100%'}}></ImageBackground></TouchableOpacity>

        <TouchableOpacity onPress={ this.nav6} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/opm.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
    </View>
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

export default Anime;