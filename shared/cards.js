import React from 'react';
import {StyleSheet,View} from 'react-native';

const Card=(props)=> {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}

            </View>

        </View>
    )
}
const styles= StyleSheet.create({
    card: {

        borderRadius: 6,
        elevation: 3,
        backgroundColor:'#D9F5F3',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
        
    },
    cardContent: {
    marginHorizontal: 18,
    marginVertical: 10
    }
})
 
export default Card;