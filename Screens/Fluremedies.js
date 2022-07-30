import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Card from '../shared/cards';
import { VStack, Box, Divider, NativeBaseProvider, Image, ScrollView, Input, Icon} from 'native-base';
import navigation from '@react-navigation/native'

const fluremedies=(navigation)=> {
    
    return(
        <NativeBaseProvider>
       <ScrollView scrollEnabled={true}>
              
             
              
             <Box px="4" pt="4" paddingBottom={'3'} >
                    <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}> • Flu • </Text>
                    </Box>
               


          <Box border="1" borderRadius="md">
            <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}}/>} style={{alignItems:'center', backgroundColor:'#86ECE5'}}>
              <Box px="4" pt="4">
                <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> 1- Dry Cough</Text>
              </Box>
              <Box px="5">
                <Text style={{ color:'black', fontSize:15}}>Open 6 dates and boil in 1/2 liter of milk for 25 minutes over low heat. Drink three cups a day. This is the ultimate dry cough remedy.</Text>
              </Box>
              <Box px="4" pb="4">
                <Image alt='1'
                 source={require('../assests/drydates.png')}
                 style={{ width: 170, height: 160}}
                />
              </Box>
            </VStack>

          </Box>

          <Box border="1" borderRadius="md">
            <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}}/>} style={{alignItems:'center', backgroundColor:'#6FCDC7'}}>
              <Box px="4" pt="4">
                <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> 2- Cold</Text>
              </Box>
              <Box px="5">
                <Text style={{ color:'black', fontSize:15}}>Turmeric mixed in warm milk is a popular and effective way to fight against cold. Drinking a glass of warm turmeric milk before sleeping helps in faster recovery from cold</Text>
              </Box>
              <Box px="4" pb="4">
                <Image alt='1'
                 source={require('../assests/turmericmilk.png')}
                 style={{ width: 200, height: 190}}
                />
              </Box>
            </VStack>

          </Box>
             </ScrollView>

        </NativeBaseProvider>
    )
}

export default fluremedies;