import React, { Component } from 'react'
import react,{useState,useEffect} from "react";
import { StyleSheet,Text,View , Button,Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import {TextInput,Card } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';

export default function Article(){

    const route = useRoute();
    const {id,cloth,address,gender,price,size,photo,email,contact} = route.params.data
    const URL = route.params.URL

    const [images, setImages] = React.useState([
        URL+photo,
        URL+photo,
        URL+photo,
    ]);


    return (
      <ScrollView style={{marginTop:30,}}>
        <SliderBox 
                images={images}
                style={{width:'100%', height:250}}
                sliderBoxHeight={400}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"  
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
        />
        <View style={{alignContent:'center', alignSelf:'center',}}>
            <Text style={{fontSize:18,}}>Cloth : {cloth}</Text>
            <Text style={{fontSize:18,}}>Address : {address}</Text>
            <Text style={{fontSize:18,}}>Gender : {gender}</Text>
            <Text style={{fontSize:18,}}>Price : {price}</Text>
            <Text style={{fontSize:18,}}>Size : {size}</Text>
            <Text style={{fontSize:18,}}>Contact : {contact}</Text>
            <Text style={{fontSize:18,}}>Email : {email}</Text>
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