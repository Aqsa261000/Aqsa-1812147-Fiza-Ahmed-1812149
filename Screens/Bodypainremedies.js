import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Card from '../shared/cards';
import { VStack, Box, Divider, NativeBaseProvider, Image, ScrollView, Input, Icon} from 'native-base';
import navigation from '@react-navigation/native'

const bodypainremedies=(navigation)=> {
    
    return(
        <NativeBaseProvider>
       <ScrollView scrollEnabled={true}>
              
             
              <Box px="4" pt="4" paddingBottom={'3'} >
                  <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}>• Body Pain •</Text>
              </Box>
               

              <Box border="1" borderRadius="lg" >
                <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}} />} style={{alignItems:'center', backgroundColor:'#86ECE5'}}>
                    <Box px="4" pt="4">
                    <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> 1- Migraine Pain </Text>
                    </Box>
                    <Box px="5">
                      <Text style={{ color:'black', fontSize:15}}>Eating an apple on an empty stomach in the morning relieves one of migraine pain. This must be done for a few mornings. </Text>
                    </Box>
                    <Box px="4" pb="4">
                        <Image alt='1'
                         source={require('../assests/apple.png')}
                         style={{ width: 170, height: 160}}
                        />
                    </Box>
                </VStack>
             </Box>
             
             <Box border="1" borderRadius="lg" >
                <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}} />} style={{alignItems:'center', backgroundColor:"#6FCDC7"}}>
                    <Box px="4" pt="4">
                    <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> 2- Joint and Bone Pain </Text>
                    </Box>
                    <Box px="5">
                      <Text style={{ color:'black', fontSize:15}}>Hot or cold packs, or a combination of the two, can soothe sore areas. Heat can help reduce muscle spasms and cold can help reduce inflammation.</Text>
                    </Box>
                    <Box px="4" pb="4">
                        <Image alt='1'
                         source={require('../assests/hotandcoldbag.png')}
                         style={{ width: 200, height: 200}}
                        />
                    </Box>
                </VStack>
             </Box>
             </ScrollView>

        </NativeBaseProvider>
    )
}

export default bodypainremedies;