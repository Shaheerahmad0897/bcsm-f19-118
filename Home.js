import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {TextInput, Button,Card } from 'react-native-paper'
import axios from "axios";
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { email1 } from './Login';

export default function Home() {
    const navigation = useNavigation();
    const [add, setStudents] = useState([{}])
    async function getAllStudent() {
      try {
        const add = await axios.get('http://172.31.1.28:19000/api/add/')
        method:'GET',
        setStudents(add.data)
        {URL='http://172.31.1.28:19000/'}
      } 
      catch (error) {
        console.log(error)
      }
    }
    getAllStudent(); 
  
    const Insert = (item) => {  
      console.log("Run")
      navigation.navigate('Article',{
      data:item,URL:URL
      })
   }

  const renderData = (item) => {
    return(
      <Card style={{alignItems:'center',marginTop:10, alignContent:'center', paddingTop:10,paddingBottom:10,}}>
          
          <Image
          style={{width:250, height:150}} 
          source={{ uri:URL+item.photo }} 
          />
          <View style={{paddingTop:10,}}>
            <Text style={{fontSize:17, fontWeight:'bold',}}>
              {item.cloth}
            </Text>
            <Text>
              {item.price}
            </Text>
            <Text style={{fontSize:12, color:'green',}}>
              {item.size}
            </Text>
          </View>
          <Button onPress={() => Insert(item)}>
            Check Detail
          </Button>
      </Card>
    )
  }


  return (
      <ScrollView>
        <View>
          <ImageBackground 
          style={{width:'100%',height:200}}
          source={require('../assets/backcloth.jpg')}>
              <View style={{width:'100%',height:130,alignSelf:'center',
              marginTop:20, borderWidth: 1, borderColor: "red",alignItems:'center',alignSelf:'center',
              backgroundColor:'gray',paddingTop:20 ,opacity:0.9}}>
                <Text style={{fontWeight:'bold',color:'white',}}>
                  Search The Cloth You Are Looking For
                  {"\n"}
                </Text>
                <TextInput
                style={{width:200,height:50,}}
                placeholder={" Enter Your Text Here"}
                >
                </TextInput>
            </View>
          </ImageBackground>    
        </View>

        <Text style={{color:'black', marginTop:20, fontSize:30, paddingLeft:20,}}>
          Buy Cloths
        </Text>
            <FlatList 
            data={add}

            renderItem={({item})=>{
              return renderData(item)
            }}
            keyExtractor = {item => `${item.id}`} 
            />


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