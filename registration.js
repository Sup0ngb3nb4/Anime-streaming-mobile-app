import React, {useState} from "react";
import { Text, View,KeyboardAvoidingView,ImageBackground,TouchableOpacity,TextInput,StyleSheet } from "react-native";
import {firebase} from './firebase'


const Registration=()=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  registerUser =async(email,password,firstName,lastName) =>{
    
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp:true,
        uri:'arisa2.firebaseapp.com'
      })
      .then(()=>{
        alert('Verification email sent')
      })
      .then(()=>{
          firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
              firstName,
              lastName,
              email,
          })
      })
    })
  }
 
  return(
    <View style={{height:750,width:360}}>
    <KeyboardAvoidingView >
      <ImageBackground style={{width:'100%',height:'100%'}} source={require('./src/assets/reg.png')}>
      <View style={{borderRadius:5,backgroundColor:'white',height:450,width:300,marginLeft:30,marginTop:100}}>
        <Text style={{fontSize:26,fontWeight:'bold',marginTop:40,marginLeft:65,color:'#05857a'}}>SignIn/SignUp</Text>
        <TextInput
          placeholder="First Name"
          onChangeText={(firstName)=> setFirstName(firstName)}
          autoCorrect={false}
       style={{borderRadius:10,height:50,width:210,backgroundColor:'#DCE0E1',marginTop:40,marginLeft:40}}
     >
      </TextInput>

      <TextInput
         placeholder="Last Name"
         onChangeText={(lastName)=> setLastName(lastName)}
         autoCorrect={false}
       style={{borderRadius:10,height:50,width:210,backgroundColor:'#DCE0E1',marginTop:20,marginLeft:40}} 
       ></TextInput>
       <TextInput
         placeholder="Email"
         onChangeText={(email)=> setEmail(email)}
         autoCapitalize="none"
         autoCorrect={false}
         keyboardType="email-address"
       style={{borderRadius:10,height:50,width:210,backgroundColor:'#DCE0E1',marginTop:20,marginLeft:40}} 
       ></TextInput>
       <TextInput
         placeholder="Password"
         onChangeText={(password)=> setPassword(password)}
         autoCapitalize="none"
         autoCorrect={false}
         secureTextEntry={true}
       style={{borderRadius:10,height:50,width:210,backgroundColor:'#DCE0E1',marginTop:20,marginLeft:40}} 
       ></TextInput>

      <TouchableOpacity onPress={()=>registerUser(email,password,firstName,lastName)}
       style={{borderRadius:5,height:30,width:110,backgroundColor:'#DCE0E1',marginTop:20,marginLeft:90,backgroundColor:'#05857a'}} >
        <Text style={{marginTop:5,marginLeft:35,color:'white'}}>Register</Text>
      </TouchableOpacity>
      </View>  


      </ImageBackground>
      </KeyboardAvoidingView>
  </View>
  )
}
export default Registration;