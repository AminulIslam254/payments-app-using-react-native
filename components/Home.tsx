import React from 'react'
import {Button, Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import { bellIcon } from './utils/ImageList';
import Features from './Pages/HomePage/Features'

const Home = () => {
  return (
    <View style={{height:"100%",width:"100%",display:"flex",flexDirection:"column"}}>
        <View style={{padding:10,display:"flex",flexDirection:"row",borderWidth:1,justifyContent:"space-between",height:70}} >
            <View style={{display:"flex",flexDirection:"column"}} >
                <Text style={{fontSize:20}} >Hello!</Text>
                <Text>Welcome User</Text>
            </View>
            <View style={{height:"100%",width:50,display:"flex",alignItems:"center"}} >
                <TouchableOpacity style={{borderRadius:20,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <Image source={bellIcon} style={{height: 25, width: 25}} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={{flex:1,padding:10,backgroundColor: 'pink',}}>
            <Features/>
        </View>
    </View>
  )
}

export default Home