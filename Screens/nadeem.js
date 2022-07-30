import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { VStack, Box, Divider, NativeBaseProvider, Image, ScrollView, Input, Icon} from 'native-base';

export default function nadeem(){
    return(
        <NativeBaseProvider>
            <ScrollView>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Box border="1" borderRadius="md">
            <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}}/>} style={{alignItems:'center', backgroundColor:'#86ECE5'}}>
              <Box px="4" pt="4">
                <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> Panadol</Text>
              </Box>
              <Box px="5">
                <Text style={{ color:'black', fontSize:15}}>Price: 160</Text>
              </Box>
              <Box px="4" pb="4">
                <Image alt='1'
                 source={require('../assests/panadol.jpg')}
                 style={{ width: 170, height: 160}}
                />
              </Box>
            </VStack>
            </Box>
            <Box border="1" borderRadius="md"
            
            
            >
            <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}}/>} style={{alignItems:'center', backgroundColor:'#86ECE5'}}>
              <Box px="4" pt="4">
                <Text style={{fontWeight:'bold', color:'black', fontSize:17}}> Augmentin</Text>
              </Box>
              <Box px="5">
                <Text style={{ color:'black', fontSize:15}}>Price: 230</Text>
              </Box>
              <Box px="4" pb="4">
                <Image alt='1'
                 source={require('../assests/augmentin.jpg')}
                 style={{ width: 170, height: 160}}
                />
              </Box>
            </VStack>
            </Box>
        </View>
        </ScrollView>
        </NativeBaseProvider>
    )
}