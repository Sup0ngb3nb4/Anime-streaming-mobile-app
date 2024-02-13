import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, TextInput,Text,KeyboardAvoidingView,StyleSheet ,TouchableOpacity,ScrollView, ImageBackground } from "react-native";

import  {firebase} from "./firebase";

const Login=()=>{
  const navigation = useNavigation();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  loginUser=async(email,password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
    }catch(error){
      alert(error.message)
    }
  }
  loginUser=async(email,password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
    }catch(error){
      alert(error.message)
    }
  }

 
    return (
        <View style={{height:750,width:450}}>
          <KeyboardAvoidingView >
            <ImageBackground style={{width:'100%',height:'100%'}} source={require('./src/assets/login.png')}>
            <View style={{borderRadius:5,backgroundColor:'white',height:360,width:300,marginLeft:30,marginTop:150}}>
              <Text style={{fontSize:26,fontWeight:'bold',marginTop:40,marginLeft:110,color:'#05857a'}}>Login</Text>
              <TextInput 
             value={email}
             onChangeText={(email)=>setEmail(email)}
             style={{borderRadius:10,height:50,width:210,backgroundColor:'#DCE0E1',marginTop:40,marginLeft:40}}
             placeholder="Email">
            </TextInput>

            <TextInput
             value={password}
             onChangeText={(text)=>setPassword(text)}
             style={{borderRadius:10,height:50,width:210,backgroundColor:'#DCE0E1',marginTop:20,marginLeft:40}} 
             secureTextEntry 
             placeholder="Password"></TextInput>
            <TouchableOpacity onPress={()=>loginUser(email,password)}
             style={{borderRadius:5,height:30,width:110,backgroundColor:'#DCE0E1',marginTop:20,marginLeft:90,backgroundColor:'#05857a'}} >
              <Text style={{marginTop:5,marginLeft:35,color:'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate('Registration')}
            style={{borderRadius:5,height:30,width:110,backgroundColor:'#DCE0E1',marginTop:10,marginLeft:90,backgroundColor:'#05857a'}}>
              <Text style={{marginTop:5,marginLeft:30,color:'white'}}>Register</Text>
            </TouchableOpacity>
            </View>  


            </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    );
  }
export default Login;