import React from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import { Component } from 'react'
import axios from "axios";
import {TextInput, Button,Card } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Navigate} from 'react-router-dom';
import { and } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../App';
import Signup from './Signup';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



export default function Verification() {

const navigation = useNavigation(); 
const [code,setcode] = useState("")
const route = useRoute();
let firstname
let email
let password
let otp
let UserType = "customer"
{firstname=route.params.Fname}
{email=route.params.Uemail}
{password=route.params.Upassword}
{otp=route.params.otp1}
  
function InsertData(){

    
    fetch('http://172.31.1.28:19000/api/emailpost/',{
    method:"Post",
    headers:{
        'Content-Type':'application/json'
        
    },
        body: JSON.stringify({otp:otp,email:email})
    })
    .then(resp => resp.json())
    .then(data => {
        console.log("Data Add Success")
    })
    .catch(error=> console.log(error))
}


function codev(){

    if(otp==code)
    {
        
        fetch('http://172.31.1.28:19000/api/Contact/',{
        method:"Post",
        headers:{
            'Content-Type':'application/json'
            
        },
            body: JSON.stringify({firstname:firstname,email:email,password:password,UserType:UserType})
        })
        .then(resp => resp.json())
        .then(data => {
            navigation.navigate('Login')
            console.log("Data Add Successs")
            
        })
        .catch(error=> console.log("Error"))
    }
    else{
        console.log("Wrong OTP")
    }
}



    
  

    return (
        <ScrollView>
        <ImageBackground
        source={require('../assets/backcloth.jpg')}
        style={{width:'100%',height:300}}
        >
            <View style={{backgroundColor:'gray', width:'100%',justifyContent:'center',
            alignSelf:'center', height:400, 
            borderColor:'red',
            marginTop:150,opacity:0.9,
            }}>
            <Text style={{color:'white',textAlign:'center'}}>send OTP on this mail : {email} </Text>
            <Button
                style={{marginTop:15, width:200,alignSelf:'center', backgroundColor:'gray',opacity:0.9,}}
                mode="contained"
                onPress={() => InsertData()}
                title="Send OTP"
            >
                Send OTP
            </Button>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
                Verification
            </Text>
            <TextInput
                style={styles.inputstyle}
                label = "Enter Code Here"
                value = {code}
                mode  = "outlined"
                onChangeText= {Text => setcode(Text) }
            />
            <Button
                style={{marginTop:15, width:200,alignSelf:'center', backgroundColor:'red',}}
                mode="contained"
                onPress={() => codev()}
                title="Verification"
            >
                Verification
            </Button>
            </View>
        </ImageBackground>
        <View style={{ marginTop:300,
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