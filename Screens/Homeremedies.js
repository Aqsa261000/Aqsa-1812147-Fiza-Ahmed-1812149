import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, } from 'react-native';
import { VStack, Box, Divider, NativeBaseProvider, Image, ScrollView, Input, Icon} from 'native-base';
import { useNavigation } from '@react-navigation/core';
import Card from '../shared/cards';

export default function homeremedies({}) {
  const navigation = useNavigation();
  const [remedies, setremedies] = useState([
    {title: '• Body Pain •'}
  ]);
  const [skindiseaseremedies, setskindiseaseremedies] = useState([
    {title: '• Skin Diseases •'}
  ]);
  const [fludiseaseremedies, setfludiseaseremedies] = useState([
    {title: '• Flu •'}
  ]);

  return(
    <NativeBaseProvider>
    <ScrollView scrollEnabled={true}>
  <View>
    <FlatList
    data={remedies}
    renderItem={({item }) => (
      <TouchableOpacity onPress={() =>
        navigation.navigate('bodypainremedies')
      }>
<Card>
<Box px="4" pt="4" paddingBottom={'3'} >
                  <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}> {item.title}</Text>
              </Box>
              <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}} />} style={{alignItems:'center'}}>
              <Box px="4" pb="4">
                        <Image alt='1'
                         source={require('../assests/bodypain.jpg')}
                         style={{ width: 170, height: 160}}
                        />
                    </Box>
              </VStack>
               
</Card>
      </TouchableOpacity>
    )}
    />
     <FlatList
    data={skindiseaseremedies}
    renderItem={({item }) => (
      <TouchableOpacity onPress={() =>
        navigation.navigate('skinremedies')
      }>
<Card>
<Box px="4" pt="4" paddingBottom={'3'} >
                  <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}> {item.title}</Text>
              </Box>
              <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}} />} style={{alignItems:'center'}}>
              <Box px="4" pb="4">
                        <Image alt='1'
                         source={require('../assests/skindisease.jpg')}
                         style={{ width: 170, height: 160}}
                        />
                    </Box>
              </VStack>
</Card>
      </TouchableOpacity>
    )}
    />
     <FlatList
    data={fludiseaseremedies}
    renderItem={({item }) => (
      <TouchableOpacity onPress={() =>
        navigation.navigate('fluremedies')
      }>
<Card>
<Box px="4" pt="4" paddingBottom={'3'} >
                  <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}> {item.title}</Text>
              </Box>
              <VStack space="4" divider={<Divider style={{borderWidth:2, borderColor:'white'}} />} style={{alignItems:'center'}}>
              <Box px="4" pb="4">
                        <Image alt='1'
                         source={require('../assests/flu.jpg')}
                         style={{ width: 170, height: 160}}
                        />
                    </Box>
              </VStack>
</Card>
      </TouchableOpacity>
    )}
    />
  </View>
  </ScrollView>

</NativeBaseProvider>
  )
  
}