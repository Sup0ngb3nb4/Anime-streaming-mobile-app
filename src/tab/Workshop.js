import React, { Component } from "react";
import { Text, View ,Button} from "react-native";



export default class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
nav1=()=>{
    this.props.navigation.navigate("Getdata")
}
nav2=()=>{
    this.props.navigation.navigate("Submitdata")
}
nav3=()=>{
    this.props.navigation.navigate("Documentpicker")
}
nav4=()=>{
    this.props.navigation.navigate("ImagePicker")
}
  
navPropsData=()=>{
    this.props.navigation.navigate("PropsData",{
        name:"Rahul",
        email:"nitche@gmail.com",
        phone:"8888899999"
    })
}


  render() {
    return (
      <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
        <Button title="Getdata" onPress={this.nav1}/>
        <Button title="Submitdata" onPress={this.nav2}/>
        <Button title="Documentpicker" onPress={this.nav3}/>
        <Button title="ImagePicker" onPress={this.nav4}/>
        <Button onPress={this.navPropsData} title="Go to props data"/>
        <Text style={{ fontSize: 15, marginBottom: 10 }}> Workshop </Text>
      </View>
    );
  }
}