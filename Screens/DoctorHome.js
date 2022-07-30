import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

export default function DocHome(){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
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
            navigation.navigate('doctorconsultation')
          }>
               <Image
          source={require('../assests/consultdoctor.png')}
          style={{ width: 75, height: 75}}
        />
          <Text style={{textAlign:'center', fontWeight:'bold',paddingTop:10, color:'black'}}>Consultation with Doctor</Text>
        </TouchableOpacity>
        </Center>
        </View>
    )
}