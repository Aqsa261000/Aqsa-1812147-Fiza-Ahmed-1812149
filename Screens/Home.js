import * as React from 'react'
import {View,Text, Image, ImageBackground, FlatList, TouchableOpacity} from 'react-native'
import {HStack, VStack, Heading, Icon, NativeBaseProvider, Input, Center, Button, Stack, ScrollView, Box} from 'native-base'
import {globalStyles} from '../styles/global';
import { useNavigation } from '@react-navigation/core';
import Card from '../shared/cards';
import homeremedies from './Homeremedies';
import auth from '@react-native-firebase/auth'
import Login from './Login'

const Homee=()=>{
  const signOutNow = () => {
    auth()
  .signOut()
  .then(() => {
    // Sign-out successful.
    console.log('User is signed out')
    navigation.replace('Login');
})
}
    const navigation = useNavigation();
    console.disableYellowBox = true;
    return(
       <NativeBaseProvider>
        <View style={{flex: 1,flexDirection: "column"}}>
        <ScrollView scrollEnabled={true}>
            <View style={{ flex: 1, backgroundColor: "#0184FE" }} >
            <TouchableOpacity style={{
                    backgroundColor: "#ebf0fa",
                    borderRadius: 10,
                    paddingVertical: 7,
                    paddingHorizontal: 7,
                    width:100,
                    marginTop:10,
                    alignItems:'center',
                    marginLeft:250

                }}
                    onPress={signOutNow}
                >
                    <Text style={{fontWeight:'bold', color:'black'}}>Log Out</Text>
                </TouchableOpacity>
                <Text style={{paddingTop:30, fontSize:25, fontWeight:'bold', textAlign:'center', color:"white", padding:5, marginTop:20}}>Welcome!</Text>
                <Text style={{paddingBottom:50,fontSize:17, fontWeight:'bold', textAlign:'center', color:"white"}}>Hope you are having a good day!</Text>
               
          
          
            
            
            <View style={{height:500,borderTopStartRadius:40, borderTopEndRadius:40, backgroundColor:'#ebf0fa', paddingTop:20, backgroundColor:'#e6faff', alignItems:'center'}}>
            <HStack mt="2">
             
                <Center >
                <Box>
            <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent:'center',
            
            marginTop: 20,
            width: 140,
            height:140,
            borderRadius:20,
            margin:10,
           
            elevation:12,
            backgroundColor:'white',
           
            
          }}
          onPress={() =>
            navigation.navigate('bmicalculator')
          }>
              <Image
          source={require('../assests/bmiicon.png')}
          style={{ width: 50, height: 50}}

        />
          <Text style={{textAlign:'center', fontWeight:'bold', paddingTop:10, color:'black'}}>BMI Calculator</Text>
        </TouchableOpacity>
        </Box>
        </Center>
       
        <Center>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
            width:140,
            height:140,
            borderRadius:20,
            margin:10,
            elevation:12,
                       
            
          }}
          onPress={() =>
            navigation.navigate('homeremedies')
          }>
               <Image
          source={require('../assests/homeremediesbesticon.png')}
          style={{ width: 50, height: 50}}
        />
          <Text style={{textAlign:'center', fontWeight:'bold',paddingTop:10, color:'black'}}>Home Remedies</Text>
        </TouchableOpacity>
        </Center>
       
        </HStack>
        <HStack>
        <Center>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
            width:140,
            height:140,
            borderRadius:20,
            margin:10,
            elevation:12,
           
            
          }}
          onPress={() =>
            navigation.navigate('consultation')
          }>
               <Image
          source={require('../assests/consultdoctor.png')}
          style={{ width: 75, height: 75}}
        />
          <Text style={{textAlign:'center', fontWeight:'bold',paddingTop:10, color:'black'}}>Consultation with Doctor</Text>
        </TouchableOpacity>
        </Center>
        <Center>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
            width:140,
            height:140,
            borderRadius:20,
            margin:10,
            elevation:12,
            
           
            
          }}
          onPress={() =>
            navigation.navigate('RootPharmacyDrawers')
          }>
               <Image
          source={require('../assests/ps.png')}
          style={{ width: 60, height: 60}}
        />
          <Text style={{textAlign:'center', fontWeight:'bold',paddingTop:10, color:'black'}}>Pharmacy Store</Text>
        </TouchableOpacity>
        </Center>
       </HStack>
       
      
        
            </View>
           </View>
           </ScrollView>
          </View>
          </NativeBaseProvider>
)       
}

export default Homee;