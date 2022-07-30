import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {NativeBaseProvider,Input,Icon,Stack,Button,IconButton,Link,HStack,} from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const Forgetpassword=()=>{
    const navigation = useNavigation();
return(
   <NativeBaseProvider>
    <View style={{ alignItems: 'center',justifyContent: 'center'}}>
      
       <Image
          source={require('../assests/hands.png')}
          style={{ width: 150, height: 150, margin: 80 }}
        />
        
        <Stack space={4} w="100%" alignItems="center">
        <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <MaterialCommunityIcons
            name="email"
            size={25}
            style={{paddingLeft:5}}

            />
            }
            placeholder="Enter Email address"
          />

        </Stack>
       
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#89CFF0',
            padding: 10,
            marginTop: 20,
            width: 200,
          }}>
          <Text>Reset Password</Text>
        </TouchableOpacity>

        <HStack mt="6" justifyContent="center" style={{paddingTop:150 }}>
        <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            Already have an account?{' '}
          </Text>
          <Link
          _text={{
            fontSize: 'sm',
            fontWeight: '500',
            color: '#0047AB',
          }}
          onPress={() =>
            navigation.navigate('Login')
          }
          >
          Login
        </Link>

        </HStack>
    </View>
   </NativeBaseProvider>
);
}


export default Forgetpassword;