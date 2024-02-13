import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Imagepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }


  render() {
    return (
      <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
        <Text style={{ fontSize: 15, marginBottom: 10 }}> ImagePicker</Text>
      </View>
    );
  }
}