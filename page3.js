import React, { Component } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";

class Manga extends Component {
  render() {
    return (
      <ScrollView>
      <View style={{marginTop:2,
    flexDirection: "row",}}>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Code Geass")} style={{
    width: 178,
    height: 250,}} >
      <ImageBackground source={require('./src/assets/cg.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
    </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Demon Slayer")} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/ds.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
       
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Noblesse")} style={{
    width: 178,
    height: 250,}} >
      <ImageBackground source={require('./src/assets/noblesse.jpg')} style={{width:'100%',height:'100%'}}></ImageBackground>
    </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Classroom Of The Elite")} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/cote.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
        </TouchableOpacity>
    </View>
      <View style={styles.container}>
       
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("The Irregular At Magic High School")} style={{
    width: 178,
    height: 250}} ><ImageBackground source={require('./src/assets/irregular.png')} style={{width:'100%',height:'100%'}}></ImageBackground></TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("The Saint's Magic Power Is Omnipotent")} style={styles.innerViewContainer} >
        <ImageBackground source={require('./src/assets/saintp.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
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

export default Manga;