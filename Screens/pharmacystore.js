import { HStack, VStack, Heading, NativeBaseProvider, Input, Center, Button, Stack, Box, FlatList} from 'native-base';
import React, {useState} from 'react';
import{colors, Icon, withBadge} from 'react-native-elements';
import { storesData } from '../shared/Data';
import {View,Text, Image, ImageBackground, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar, Dimensions,ScrollView } from 'react-native';
import FoodCard from '../Components/FoodCard';
import { useNavigation } from '@react-navigation/core';
import CountDown from 'react-native-countdown-component';
import COLORS from "../color"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const images = [
    'https://s3.amazonaws.com/jconline/Free_Delivery_970_420+(1).jpg',
    'https://www.chubbybitsy.com/image/chubbybitsy/image/data/refund.jpg',
    
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const pharmacystore=()=>{ 
    const BadgeIcon = withBadge(0)(Icon)
    const [delivery, setDelivery]=useState(true)
    const [imgActive, setimgActive] = useState(0);
    const navigation = useNavigation();
    // onChange = (nativeEvent) => {
    //     if(nativeEvent) {
    //         const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    //     if(slide != imgActive) {
    //         setimgActive(slide);
    //     }
    //     }
    // } 
    return(
        <NativeBaseProvider>
        <SafeAreaView style={styles.container} >
        <View style={{flex: 1,flexDirection: "column"}}>
        <ScrollView scrollEnabled={true}>
        <View style={{ flex: 1, backgroundColor: "#0184FE" }} >
        <HStack>
            <TouchableOpacity onPress={()=>{
                navigation.toggleDrawer();
            }}>
        <MaterialCommunityIcons
              name="menu"
              size={30}
              style={{marginLeft:17, marginTop:17}}
              color = {'white'}
              />
              </TouchableOpacity>
              <TouchableOpacity>
              <MaterialCommunityIcons
              name="cart"
              size={30}
              style={{marginLeft:260, marginTop:17}}
              color = {'white'}
              />
              </TouchableOpacity>
              </HStack>
        <View style={{flex:1,alignItems:"center", justifyContent:"center", marginTop:6}}>
                <Text style={{paddingTop:30, fontSize:25, fontWeight:'bold', color:"white", paddingBottom:30, paddingLeft:20}}>Pharmacy Store</Text>
                
               
           
            </View>
            <View style={{backgroundColor:"#e6faff",borderTopStartRadius:40,borderTopEndRadius:40}}>
            <View style={{flexDirection:"row", backgroundColor:"#F8F8F8", marginTop:10, paddingVertical:10, paddingHorizontal:10, width:320, marginLeft:20, marginTop:20, marginBottom:20, elevation:5}}>
                <View style={{flexDirection:"row", alignItems:"center", marginLeft:37}}>
                    <Icon
                     type="material-community" 
                     name="map-marker"
                     size={28}
                     color="black"

                    />
                    <Text style={{marginLeft:5, fontWeight:'bold'}}>Block 5 Clifton</Text>

                    <Icon
                     type="material-community"
                     name="clock-time-four"
                     size={28}
                     color="black"
                     marginLeft={30}
                     
                    />
                    <Text style={{marginLeft:5, fontWeight:'bold'}}>Now</Text>
                </View>
               
            
        
              
                </View>
            
           
            <View style={{flexDirection:"row", justifyContent:"center", marginBottom:20, }}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() =>{
                    setDelivery(true)
                   
                   }}>
                 
                    <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center'}}>Delivery</Text>
                
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonStylee}   onPress={() =>{
                    setDelivery(false)
                    navigation.navigate("StoresMap")
                   }}>
              
                   <Text style={{fontWeight:'bold', color:'black', fontSize:17, textAlign:'center', width:90}}>Pick Up</Text>
               
               </TouchableOpacity>
              
            </View>
           
           
                {/* <View style={styles.wrap}>
                <ScrollView
                onScroll={({nativeEvent}) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
               
                pagingEnabled
            
                horizontal
                style={styles.wrap}
                
                >
                    {
                        images.map((e, index) =>
                        <Image 
                        key = {e}
                        resizeMode='stretch'
                        style={styles.wrap}
                        source={{uri: e}}
                        backgroundColor={"#e6faff"}
                        
                        />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                        <Text
                        key={e}
                        style={imgActive == index ? styles.dotActive : styles.dot}
                        >
                            ⬤

                        </Text>
                        )
                    }
                </View>

            </View>
            
                 */}
          <View style={styles.headerTextView}>
            <Text  style={styles.headerText}>Shops</Text>
          </View>

          <View style={{flexDirection:'row', marginTop:20}}>
                <Text style={{marginLeft:15, fontSize:16, marginTop:10, marginRight:5, fontWeight:'bold'}}> Options changing in </Text>
                <CountDown 
                until = {3600}
                size={14}
                digitStyle = {{backgroundColor:"#66DF48"}}
                digitTxtStyle={{color:"white"}}
                timeToShow={['M','S']}
                timeLabels={{m:'Min', s:'Sec'}}
                timeLabelStyle={{fontSize:12, color:"black", fontWeight:"bold"}}
                />
               </View>
          <View>
            
                    <FlatList 
                    style={{marginTop:10, marginBottom:10}}
                    horizontal={true}
                    data={storesData}
                    keyExtractor={(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{navigation.navigate('nadeem')}}>
                        <View style={{marginLeft:7}}>
                       
                            <FoodCard 
                            screenWidth={WIDTH*0.8}
                            images={item.images}
                            storeName={item.storeName}
                            deliverTime={item.deliverTime}
                            storeAddress={item.storeAddress}
                            averageReview={item.averageReview}
                            numberofreviews={item.numberofreviews}
                            />
                            
                                
                          
                        </View>
                        </TouchableOpacity>
    )}
                    />
            
          </View>
          <View style={styles.headerTextView}>
            <Text  style={styles.headerText}>Stores</Text>
          </View>
          <View style={{width:WIDTH, paddingTop:10}}>
            {
                  storesData.map(item =>(
                        <View key={item.id} style={{paddingBottom:20}}>
                            <TouchableOpacity>
                                   <FoodCard 
                            screenWidth={WIDTH*0.95}
                            images={item.images}
                            storeName={item.storeName}
                            deliverTime={item.deliverTime}
                            storeAddress={item.storeAddress}
                            averageReview={item.averageReview}
                            numberofreviews={item.numberofreviews}
                            />
                            </TouchableOpacity>
                        </View>
                        
                  ))
            }      
          </View>

          </View>
          </View>
          </ScrollView>
          { delivery &&
          <View style={styles.floatbutton}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('StoresMap')
            }}>
                <Icon 
                        name='place'
                        type='material'
                        size={32}
                        color={colors.black}
                />
                <Text>Map</Text>
            </TouchableOpacity>
          </View>
}
          </View>
        </SafeAreaView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
       
        elevation:7,
        marginRight:7,
       alignItems:'center',
       justifyContent:'center',
       width:150,
       height:40,
       backgroundColor:'white',
       borderRadius:40,
       
    },
    buttonStylee: {
        
       
        elevation:7,
        marginLeft:7,
       alignItems:'center',
       justifyContent:'center',
       width:150,
       height:40,
       backgroundColor:'white',
       borderRadius:40,
        },
container: {
    flex: 1
},
wrap: {
width: WIDTH*0.95,
height: HEIGHT * 0.25,
backgroundColor:"#e6faff",
borderRadius:50,
marginLeft:5,

},
wrapDot: {
    position:'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    
},
dotActive: {
    margin: 3,
    color: 'black'
},
dot: {
    margin: 3,
    color: 'white'
},
headerText:{
    color: 'black',
    fontSize:22,
    fontWeight:"bold",
    paddingLeft:20
},
headerTextView:{
    backgroundColor: '#A7B8B7',
    marginTop:20
  
},
floatbutton:{
    position:'absolute',
    bottom:10, right:15, 
    backgroundColor: 'white',
    elevation:10, width:60, height:60, borderRadius:30,alignItems:'center'
}

});

/*  <BadgeIcon
                type="material-community"
                name="cart"
                size={35}
                color="black"
                paddingLeft={320}
                /> */

export default pharmacystore;