import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Images } from '../../Images';
import { Items, itemsArray } from '../../data';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const TrackHistory = () => {

    const renderItems=({ item }: { item: Items }) =>{
        return(
            <View style={styles.itemContainer}>
                <View style={styles.nameImageContainer}>
                    <Image source={item.image} style={styles.itemImage}/>
                    <Text style={styles.textStyle}>{item.name}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.textStyle}>{item.hospital}</Text>
                    <Text style={styles.textStyle}>{`Payment: ${item.payment}`}</Text>
                    <View style={item.isPayed===false ? styles.notPaidStyle : styles.paidStyle}>
                        <Text style={styles.payedText}>{item.isPayed===false ? "NOT YET PAYED" : "PAID"}</Text>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Images.profilePicture} style={styles.profilePictureStyle}/>
                <Text style={styles.name}>John Doe</Text>
            </View>
            <Text style={styles.headingStyle}>Previous Bookings</Text>
            <FlatList
            data={itemsArray}
            renderItem={renderItems}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop:70,
        gap:20,
        height: '40%',
        marginBottom: 10,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#4f4f4f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight:'700',
        color: '#fff',
    },
    profilePictureStyle:{
        width:80,
        height:80,
        borderRadius:50
    },
    itemContainer:{
        width:'95%',
        borderWidth:4,
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#B81D24',
        borderRadius:30,
        marginBottom:10,
        marginHorizontal:10,
        padding:10,
    },
    itemImage:{
        width:DEVICE_WIDTH*0.138,
        height:DEVICE_WIDTH*0.138,
    },
    nameImageContainer:{
        gap:10,
        alignItems:'center'
    },
    notPaidStyle:{
        backgroundColor:'#B81D24',
        borderRadius:15,
        padding:5,
    },
    payedText:{
        fontSize:16,
        color:'white',
        fontWeight:'700',
        textAlign:'center'
    },
    paidStyle:{
        backgroundColor:'#B81D24',
        borderRadius:15,
        padding:5,
        opacity:0.7
    },
    textStyle:{
        fontSize:18,
        fontWeight:'700',
        color:'black'
    },
    detailsContainer:{
        gap:10,
        
    },
    headingStyle:{
        fontSize:22,
        fontWeight:'700',
        color:'black',
        marginLeft:10,
        marginBottom:10,
    }
});
