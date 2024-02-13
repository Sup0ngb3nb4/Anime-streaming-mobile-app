import React, { Component } from "react";
import { Text, View } from "react-native";

export default class PropsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email:"",
      phone:""
    };
  }


  render() {
    return (
      <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
        <Text style={{ fontSize: 15, marginBottom: 10 }}> Welcome,this is the propsdata section </Text>
        <Text style={{ fontSize: 15, marginBottom: 10 }}> Data :{this.props.route.params.name}
         {this.props.route.params.email}
          {this.props.route.params.phone}</Text>
      </View>
    );
  }
}