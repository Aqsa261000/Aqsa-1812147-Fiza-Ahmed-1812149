import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import {NativeBaseProvider,Input,Icon,Stack,IconButton,Link,HStack} from 'native-base';
import { useNavigation } from '@react-navigation/core';
import auth from '@react-native-firebase/auth';
import { MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import firestore from '@react-native-firebase/firestore'




const Signup=()=>{
    const [show, setShow] = React.useState(false);
   
    const handleClick = () => setShow(!show);
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const navigation = useNavigation();
    
   const signupuser= async ()=>{
     
    try{
      const result = await auth().createUserWithEmailAndPassword(email,password)
      firestore().collection('users').doc(result.user.uid).set({
          firstname:firstname,
          lastname:lastname,
          role: role,
          email:result.user.email,
          uid:auth().currentUser.uid
      })
      console.log('User account created & signed in!');
      
      
      }catch(error){
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email already in use')
          alert('Email already in use')
        }
        if(error.code === 'auth/invalid-email'){
          console.log('Email already in use')
          alert('Invalid Email')
        }
        if(error.code === 'auth/weak-password'){
          console.log('The given password is invalid. [ Password should be at least 6 characters ]')
          alert('The given password is invalid. [ Password should be at least 6 characters')
        }
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
          placeholder="First Name"
          value={firstname}
          onChangeText={text=>setFirstName(text)}
         />
         <Input  w={{base: '75%', md: '25%',}}
          placeholder="Last Name"
          value={lastname}
          onChangeText={text=>setLastName(text)}
         />
         <Input  w={{base: '75%', md: '25%',}}
          placeholder="Role"
          value={role}
          onChangeText={text=>setRole(text)}
         />
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
          onPress={signupuser}
          >
          <Text>Sign Up</Text>
        </TouchableOpacity>
          
        <HStack mt="6" justifyContent="center" paddingBottom={10}>
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
              navigation.navigate('Login')
            }>
          Login
          </Link>
          

        </HStack>
       </View>
   </NativeBaseProvider>
    );
          
}



export default Signup;




