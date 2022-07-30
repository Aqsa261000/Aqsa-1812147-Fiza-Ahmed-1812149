import { ScrollView } from 'native-base';
import React from 'react';
import {Text, View, TouchableOpacity,Image, StyleSheet, Dimensions} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import Gallery from 'react-native-image-gallery';

export default function FoodCard({
    OnPressFoodCard,
    storeName,
    deliverTime,
    storeAddress,
    averageReview,
    numberofreviews,
    images,
    screenWidth,
    farAway
}) {
    return(
        <ScrollView scrollEnabled={true}>
        <TouchableOpacity>
            <View style={{...styles.cardView, width:screenWidth}} >
                <Image style={{...styles.image, width:screenWidth}}
                source = {{uri: images}}
                />

<View>
                <Text style={styles.storeName}>{storeName}</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={styles.distance}>
                     <Icon 
                     name='place'
                     type='material'
                     color={colors.grey2}
                     size={18}
                     iconStyle={{marginTop:3}}
                     />
                     <Text style={styles.Min}>{deliverTime}</Text>
                </View>

                <View style={{flex:9, flexDirection:'row'}}>
                    <Text style={styles.address}>{storeAddress}</Text>
                </View>
            </View>
            </View>
           
            <View style={styles.review}>
            <Text style={styles.average}>{averageReview}</Text>
            <Text style={styles.numberofreviews}>{numberofreviews} reviews</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    cardView: {
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image: {
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height: 150
    },
    distance:{
            flex:4,
            flexDirection:'row',
            borderRightColor:colors.grey4,
            paddingHorizontal:5,
            borderRightWidth:1
    },
    Min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
    }, 
    address:{
        fontSize:12, paddingTop:5, color:colors.grey2, paddingHorizontal:10
    },
    review:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    average:{
        color:"white",
        fontSize:17,
        fontWeight:'bold',
        marginTop:-3
    },
    storeName:{
        fontSize:17,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3,
        marginLeft:8
    },
    numberofreviews:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0
    }
})