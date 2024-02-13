import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
        <Text style={{ fontSize: 15, marginBottom: 10 }}> LOGIN </Text>
        <Button title="Tabs" onPress={()=>this.props.navigation.navigate("Tabs")}></Button>
        <Button title="Register" onPress={()=>this.props.navigation.navigate("Register")}></Button>
        
      </View>
    );
  }
}