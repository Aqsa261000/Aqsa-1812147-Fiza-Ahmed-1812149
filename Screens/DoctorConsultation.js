import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  VStack,
  Box,
  Divider,
  NativeBaseProvider,
  ScrollView,
  Input,
  Icon,
  Button,
  Center,
  HStack,
  Avatar,
  FlatList,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import firestore from '@react-native-firebase/firestore';

import {AuthenticationUserContext} from '../App';

import {AuthenticationDoctorContext} from '../App';


const doctorconsultation = () => {
  console.disableYellowBox = true;
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const {doctor} = useContext(AuthenticationDoctorContext);

  const consultscreen = () => {
    navigation.navigate('DoctorConsultbutton');
  };
  const getUsers = async () => {
    try {
      const querySanp = await firestore().collection('users').get();

      const allUsers = querySanp.docs.map(docSnap => docSnap.data());
      console.log(allUsers);
      setUser(allUsers);
    } catch (err) {
      alert('Not found');
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const RenderCard = ({item}) => {
    return (
      <NativeBaseProvider>
        <View
          style={{
            backgroundColor: '#e6faff',
            flexDirection: 'column',
            paddingTop: 10,
          }}>
          <ScrollView scrollEnabled={true}>
            <Box
              pt="6"
              backgroundColor={'white'}
              height={150}
              width={330}
              borderRadius="lg"
              alignSelf={'center'}
              margin={1}
              alignItems={'center'}
              shadow={1}>
              <HStack
                divider={
                  <Divider
                    orientation="vertical"
                    style={{borderColor: 'white', marginLeft: 6}}
                  />
                }
                style={{alignItems: 'center', height: 80}}>
                <Box paddingTop={1}>
                  <Avatar
                    marginLeft={16}
                    source={{
                      uri: 'https://media.istockphoto.com/photos/portrait-of-happy-african-doctor-at-private-clinic-picture-id1189303662?k=20&m=1189303662&s=612x612&w=0&h=q3P08I8GlYRHIYFoN-h_WBM0PPGzO6ox4XJx8kxJRsc=',
                    }}
                    width={75}
                    height={75}></Avatar>
                </Box>
                <HStack marginLeft={1} marginBottom={12}>
                  <Box marginRight={140}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 15,
                      }}>
                      {' '}
                      {item.email}{' '}
                    </Text>
                  </Box>
                </HStack>
              </HStack>
              <HStack marginTop={-51} marginLeft={-2}>
                <Box marginLeft={5} flexDirection={'column'}>
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.firstname}
                  </Text>
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.lastname}
                  </Text>
            
                </Box>
              </HStack>
              <HStack marginLeft={200}>
                <Box>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#0184FE',
                      padding: 5,
                      marginLeft: 30,
                      marginTop: 2,
                      width: 80,
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      navigation.navigate('DoctorConsultbutton', {
                        firstname: item.firstname,
                        lastname: item.lastname,
                        uid: item.uid,
                      });
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Consult
                    </Text>
                  </TouchableOpacity>
                </Box>
              </HStack>
            </Box>
          </ScrollView>
        </View>
      </NativeBaseProvider>
    );
  };

  return (
    <NativeBaseProvider>
      <View style={{flex: 1, backgroundColor: '#e6faff'}}>
        <View style={{backgroundColor: '#0184FE', borderBottomRightRadius: 40}}>
          <Text
            style={{
              paddingTop: 70,
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              paddingBottom: 30,
              paddingLeft: 20,
            }}>
            Consult with a Doctor
          </Text>
        </View>

        <FlatList
          data={users}
          renderItem={({item}) => {
            return <RenderCard item={item} />;
          }}
          keyExtractor={item => item.uid}
          style={{paddingTop: 20}}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default doctorconsultation;
