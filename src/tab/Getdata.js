import React, { Component } from "react";
import { Button, Text, View, StatusBar, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
export default class Getdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: "",
      userData: []
    };
  }

  componentDidMount = () => {
    this.getData();
  }
  getData = () => {
    fetch(`https://geocovid.in/NIT/api/get_details.php`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
            userData: responseJson
        })


      })

      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (


        <ScrollView vertical={true} >
        {
            this.state.userData.map((item, key) =>(
                <View style={{height: 145, width: "80%",  flexDirection:"row", justifyContent:"space-between"}}>
                  <View style={{flexDirection:"row"}}>
                    <View style={{height: 140, width: "50%", }}>
                    </View>
                    
                    <View style={{height: 140, width: "50%",  }}>
                    
                       <View style={{textalign:'center'}}key={item.key}>
                       <AntDesign name="arrowright" size={24} color="black" />
                        <Text>{item.name}</Text>
                        <Text>{item.phone}</Text>
                        <Text>{item.course}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.year}</Text>
                        <Image 
                source={{uri: "https://geocovid.in/NIT/assets/img/"+ item.image}}
                style={{height: 50, window: 50, borderRadius: 50}}
                resizeMode="contain"/>
                       </View>
                    </View>
                </View>
                <View style={{height: 140, width: "15%" }}></View>
        </View>
            ))
        }
        </ScrollView>
    );
  }
}
