import React from 'react'
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    } 
from 'react-native';

export default function StadiumCards({stadium}) {

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{stadium.name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    card: {
        flex:1
    },
    cardTitle: {
        fontSize: 10,
        flex: 1,
        
    }
  })