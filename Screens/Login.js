import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {NativeBaseProvider,Input,Icon,Stack,IconButton,Link,HStack, VStack} from 'native-base';

import { useNavigation } from '@react-navigation/core';
//import { MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';
import auth from '@react-native-firebase/auth';
import {signInWithEmailAndPassword} from '@react-native-firebase/auth'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export const Login=()=>{
  console.disableYellowBox = true;
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigation = useNavigation();
    
    const loginuser= async ()=>{
     
      try{
        const result = await auth().signInWithEmailAndPassword(email,password);
        console.log('User is signed in!');
        }
        catch(err){
          alert("Error occured")
        }

        
  }
    return(
        <NativeBaseProvider> 
       <View style={{ alignItems: 'center',justifyContent: 'center'}}>
       
       <Image
          source={require('../assests/hands.png')}
          style={{ width: 150, height: 150, margin: 80 }}
        />
        <Stack space={4} w="100%" alignItems="center" style={{paddingBottom:-20}}>
         <Input  w={{base: '75%', md: '25%',}}
          InputLeftElement={
              <MaterialCommunityIcons
              name="email"
              size={25}
              style={{paddingLeft:5}}

              />
          }
          placeholder="Email Address"
          value={email}
          onChangeText={text=>setEmail(text)}
         />
        
         
         <Input  type={show ? 'text' : 'password'}
            w={{ base: '75%', md: '25%' }}
          InputRightElement={
              <IconButton  size="m"
              rounded="none"
              w="10"
              h="10"
              onPress={handleClick}
              style={{ padding: 8 }}>
               {show ? (
              <Entypo
              name="eye"
              size={25}
              style={{paddingRight:5}}

              />
              ) : (
                <Entypo
                name="eye-with-line"
                size={25}
                style={{paddingRight:5}}
  
                />
                  )}
              </IconButton>
          }
          placeholder="Password"
          value={password}
          onChangeText={text=>setPassword(text)}
         />
        

        </Stack>
        
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#89CFF0',
            padding: 10,
            marginTop: 20,
            width: 200,
          }}
          onPress={loginuser}>
          <Text>Log in</Text>
        </TouchableOpacity>
          
        <VStack mt="6" width={200} alignItems="center" justifyContent="center" paddingBottom={10}>
          <HStack>
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
           Already have an account? {' '}
           </Text>
          <Link
            _text={{
              color: '#0047AB',
              fontWeight: 'medium',
              fontSize: 'sm',
            }} 
            onPress={() =>
              navigation.navigate('Signup')
            }>
          Signup
          </Link>
          </HStack>
          <HStack style={{marginTop:160}}>
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
           Want to sign up as Doctor? {' '}
          </Text>
          <Link
            _text={{
              color: '#0047AB',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            onPress={() =>
              navigation.navigate('DoctorSignup')
            }>
          Doctor SignUp
          </Link>
          </HStack>

        </VStack>
       </View>
   </NativeBaseProvider>
    );
}

export default Login;

const styles = StyleSheet.create({
  viewcontainer1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


