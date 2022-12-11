import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList ,ImageBackground,ScrollView} from 'react-native';
import {TextInput, Button } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';    
import { ToastAndroid, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, } from 'react-native-paper'
import axios from "axios";
import mime from "mime";

var localUri ="0"
var filename ="0"
var match ="0"
var type  ="0"


function add_post() {
    let featured = '0'


    const [Picone, setPicone] = React.useState(null);


    const [cloth,setcloth] = useState("")
    const [address,setaddress] = useState("")
    const [gender,setgender] = useState("")
    const [price,setprice] = useState("")
    const [size,setsize] = useState("")
    const [email,setemail] = useState("")
    const [contact,setcontact] = useState("")
    

    const takePhoto= async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
      });

      if (result.cancelled) {
          return;
      }
      localUri = result.uri;
      setPicone(localUri);
      filename = localUri.split('/').pop();

      match = /\.(\w+)$/.exec(filename);
      type = match ? `image/${match[1]}` : `image`;  
  }

 

  const Upload= async () => {
    
    let formData = new FormData();
    formData.append('photo', { uri: localUri, name: filename, type });
    formData.append('cloth',cloth);
    formData.append('address',address);
    formData.append('gender',gender);
    formData.append('price',price);
    formData.append('size',size);
    formData.append('contact',contact); 
    formData.append('email',email);
    
    await axios.post('http://172.31.1.28:19000/api/add/', formData,{
    accept: 'application/json',
    headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => {
        console.log("success")
    }).catch(error => {
        console.log(error);
    });
}


    return (
      <ScrollView>
        <ImageBackground 
           style={{width:'100%',height:200}}
            source={require('../assets/backcloth.jpg')}>
    
         </ImageBackground>
        <View style={{backgroundColor:'gray', width:'100%', height:400, marginTop:120,}}>
        <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Post Your Old Cloth
          </Text>
            <TextInput
                style={styles.inputstyle}
                label = "Cloth"
                value = {cloth}
                mode  = "outlined"
                onChangeText= {Text => setcloth(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Address"
                value = {address}
                mode  = "outlined"
                onChangeText= {Text => setaddress(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Gender"
                value = {gender}
                mode  = "outlined"
                onChangeText= {Text => setgender(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Price"
                value = {price}
                mode  = "outlined"
                onChangeText= {Text => setprice(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Cloth Size"
                value = {size}
                mode  = "outlined"
                onChangeText= {Text => setsize(Text) }
            />
        </View>
        <View style={{backgroundColor:'gray', width:'100%', height:150, marginTop:10,}}>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Image Upload
            </Text>
            <Text>{"\n"}</Text>
            <Button
              mode='contained'
              onPress={takePhoto}
              style={{width:140,alignItems:'center',alignSelf:'center',
              justifyContent:'center',}}
            >
                Upload Image
            </Button>
            <Text>{"\n"}</Text>
          </View>
          <View style={{backgroundColor:'gray', width:'100%', height:260, marginTop:10,}}>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
              Contact
            </Text>
            <TextInput
                style={styles.inputstyle}
                label = "Contact"
                value = {contact}
                mode  = "outlined"
                onChangeText= {Text => setcontact(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Email"
                value = {email}
                mode  = "outlined"
                onChangeText= {Text => setemail(Text) }
            />
            
          </View>

          <View style={{backgroundColor:'gray', width:'100%', height:130, marginTop:10,}}>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Submit
            </Text>
            <Text>{"\n"}</Text>
            <Button
              onPress={Upload}
              mode='contained'
              style={{width:140,alignItems:'center',alignSelf:'center',
              justifyContent:'center',}}
            >
                Submit
            </Button>
          </View>


          <View style={{ marginTop:10,
            backgroundColor:'gray',width:'100%', height:190,paddingTop:20,justifyContent:'center', alignSelf:'center', }}>
            <Text style={{color:'white', justifyContent:'center', alignSelf:'center',
            paddingLeft:0,}}>
            {"\n"}  
            Subscribe to our
            Newsletter
            </Text>
              <Text style={{color:'white', justifyContent:'center', alignSelf:'center',
              paddingLeft:0, justifyContent:'center', alignContent:'center',}}>
                {"\n"}
                About Us
                {"\n"}
                {"\n"}
                Our Services
                {"\n"}
                {"\n"}
              </Text>
        </View>
      </ScrollView>
    )
  }

const styles = StyleSheet.create({
    
    inputstyle:{
        
        marginTop:15,
        width:200,
        alignSelf:'center',
    }

})

export default add_post
