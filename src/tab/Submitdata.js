import React, {Component} from 'react';  
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';  
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
  
export default class SubmitData extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      name:"",
      isName:false,

      email: "" ,
      isEmail:false,

      course: "",
      isCouse:false,

      phone: "",
      isPhone:false,

      year: "",
      isYear:false,
    };
  }

  changeName = (name) => {
    this.setState({name : name});
  }

  changeEmail = (email) => {
    this.setState({email : email});
  }

  changePhone = (phone) => {
    this.setState({phone : phone});
  }

  changeCourse = (course) => {
    this.setState({course : course});
  }

  changeYear = (year) => {
    this.setState({year : year});
  }

  submitData = async () => {
    let formData = new FormData();
    formData.append("name", this.state.name)
    formData.append("mobile", this.state.phone)
    formData.append("email", this.state.email)
    formData.append("course", this.state.course)
    formData.append("year", this.state.year)
    formData.append("image", {
      uri: this.state.photoURL,
      name: `dave.jpg`,
      type: `image/jpg`,
    })
    console.log(formData)
    await fetch("https://geocovid.in/NIT/api/add_details.php", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "multipart/form-data",
          },
        })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    this.setState({photoURL : result.assets[0].uri, isPhotoSelected : true});
  }

  render() {  
      return (  
        <View>
          <ScrollView horizontal={false}>
            <View>
              <StatusBar style='light' backgroundColor="darkblue"/>
            </View>

            <View>
              <Text style={{
                fontSize:35,
                fontWeight:'bold',
                marginLeft:10,
                marginTop:10,
                color:'#222',
              }}>Form</Text>
            </View>
            
            <View style={{marginLeft:10,marginTop:20,}}>
              <Text  style={{
              fontSize:25,
              color:'#222',
            }}>Name : </Text>
            </View>

            <View style={{marginLeft:10,marginTop:10,}}>
              <TextInput style={{
            width:250,
            borderWidth:2,
            borderRadius:10,
            borderColor:'black',
            paddingLeft:10,
            paddingRight:10,
          }}
          onChangeText= {(name) => this.changeName(name)}></TextInput>
            </View>

            <View style={{marginLeft:10,marginTop:20,}}>
              <Text  style={{
              fontSize:25,
              color:'#222',
            }}>Email : </Text>
            </View>

            <View style={{marginLeft:10,marginTop:10,}}>
              <TextInput style={{
            width:250,
            borderWidth:2,
            borderRadius:10,
            borderColor:'black',
            paddingLeft:10,
            paddingRight:10,
          }}
          onChangeText= {(email) => this.changeEmail(email)} keyboardType={'email-address'}></TextInput>
            </View>
            
            
            <View style={{marginLeft:10,marginTop:20,}}>
              <Text  style={{
              fontSize:25,
              color:'#222',
            }}>Phone no : </Text>
            </View>

            <View style={{marginLeft:10,marginTop:10,}}>
              <TextInput style={{
            width:250,
            borderWidth:2,
            borderRadius:10,
            borderColor:'black',
            paddingLeft:10,
            paddingRight:10,
          }}
          onChangeText= {(phone) => this.changePhone(phone)} keyboardType={'phone-pad'}></TextInput>
            </View>

            <View style={{marginLeft:10,marginTop:20,}}>
              <Text  style={{
              fontSize:25,
              color:'#222',
            }}>Course : </Text>
            </View>

            <View style={{marginLeft:10,marginTop:10,}}>
              <TextInput style={{
            width:250,
            borderWidth:2,
            borderRadius:10,
            borderColor:'black',
            paddingLeft:10,
            paddingRight:10,
          }}
          onChangeText= {(course) => this.changeCourse(course)}></TextInput>
            </View>

            <View style={{marginLeft:10,marginTop:20,}}>
              <Text  style={{
              fontSize:25,
              color:'#222',
            }}>Year : </Text>
            </View>

            <View style={{marginLeft:10,marginTop:10,}}>
              <TextInput style={{
            width:250,
            borderWidth:2,
            borderRadius:10,
            borderColor:'black',
            paddingLeft:10,
            paddingRight:10,
          }}
          onChangeText= {(year) => this.changeYear(year)} keyboardType={'phone-pad'}></TextInput>
            </View>

            <View style={{paddingTop:30}}>
                {
                    this.state.isPhotoSelected ?
                    <View style={{
                    borderWidth:3,
                    marginLeft:25,
                    marginRight:25,}}>
                        <Image source={{uri : this.state.photoURL,
                            height:200,
                        }}></Image>
                    </View>
                    :
                    <View style={{
                        paddingTop:250,
                        borderWidth:3,
                        backgroundColor:'lightyellow',
                        marginLeft:25,
                        marginRight:25,
                    }}/>
                }
            </View>
            
            <View style={{flexDirection:'row',justifyContent:"center",}}>
              <TouchableOpacity onPress={this.pickImage}>
                <View style={{
                  marginTop:5,
                  paddingTop:10,
                  paddingBottom:10,
                  paddingRight:105,
                  paddingLeft:105,
                  backgroundColor: 'darkblue',
                  borderRadius:10,
                  }}>
                    <Text style={{
                      fontSize:20,
                      color:'white',
                      textAlign:'center',
                    }}>Select Photo</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:"center",}}>
              <TouchableOpacity onPress={
                this.submitData
              }>
                <View style={{
                  marginTop:40,
                  paddingTop:10,
                  paddingBottom:10,
                  paddingRight:25,
                  paddingLeft:25,
                  backgroundColor: 'darkblue',
                  borderRadius:10,
                  }}>
                    <Text style={{
                      fontSize:20,
                      color:'white',
                      textAlign:'center',
                    }}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>    
      );  
  }  
}