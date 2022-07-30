import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Card from '../shared/cards';
import { VStack, Box, Divider, NativeBaseProvider, Image, ScrollView, Input, Icon} from 'native-base';
import navigation from '@react-navigation/native'

const skinremedies=(navigation)=> {
    
    return(
        <NativeBaseProvider>
       <ScrollView scrollEnabled={true}>
              
             
              <Box px="4" pt="4" paddingBottom={'3'} >
                  <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}> • Skin Diseases • </Text>
              </Box>
               

              <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}}/>} style={{alignItems:'center', backgroundColor:'#86ECE5'}}>
                   <Box px="4" pt="4">
                      <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> 1- Acne and Blackheads </Text>
                   </Box>
                <Box px="5">
                  <Text style={{ color:'black', fontSize:15}}>Grated cucumber applied over the face, eyes, and neck for fifteen minutes is very beneficial for acne and blackheads.</Text>
                </Box>
                 <Box px="4" pb="4">
                  <Image alt='1'
                  source={require('../assests/cucumber.png')}
                  style={{ width: 200, height: 160}}
                  />
                </Box>
               </VStack>
             </Box>

             <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}}/>} style={{alignItems:'center', backgroundColor:'#6FCDC7'}}>
                   <Box px="4" pt="4">
                      <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> 2- Skin Rashes </Text>
                   </Box>
                <Box px="5">
                  <Text style={{ color:'black', fontSize:15}}>Aloe Vera is a great choice to manage rashes as it possesses strong antibacterial, antifungal, and anti-irritant properties. The fleshy gel of aloe soothes rashes</Text>
                </Box>
                 <Box px="4" pb="4">
                  <Image alt='1'
                  source={require('../assests/aloevera.png')}
                  style={{ width: 200, height: 160}}
                  />
                </Box>
               </VStack>
             </Box>
             </ScrollView>

        </NativeBaseProvider>
    )
}

export default skinremedies;