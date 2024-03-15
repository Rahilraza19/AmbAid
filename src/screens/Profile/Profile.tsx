import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Images } from '../../Images';
import { useNavigation } from '@react-navigation/native';

export const Profile = () => {
    const navigation=useNavigation();

    const handleSignOut=()=>{
        navigation.navigate('LogIn');
    };
    const handlePersonalDetails=()=>{
        navigation.navigate('PersonalDetails');
    };
    const handleTrackHistory=()=>{
        navigation.navigate('TrackHistory');
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Images.profilePicture} style={styles.profilePictureStyle}/>
                <Text style={styles.name}>John Doe</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.option} onPress={handlePersonalDetails}>
                    <Text style={styles.tabName}>Personal details</Text>
                    <Image source={Images.rightArrow} style={styles.arrowIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.tabName}>Payment methods</Text>
                    <Image source={Images.rightArrow} style={styles.arrowIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={handleTrackHistory}>
                    <Text style={styles.tabName}>Track History</Text>
                    <Image source={Images.rightArrow} style={styles.arrowIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.tabName}>Notifications</Text>
                    <Image source={Images.rightArrow} style={styles.arrowIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.signOutButtonContainer} onPress={handleSignOut}>
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signOutButtonContainer} onPress={handleSignOut}>
                    <Text style={styles.signOutText}>Delete Account</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 50,
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
    option: {
        marginHorizontal: 20,
        height: 50,
        backgroundColor:'#F8F8FA',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    arrowIcon: {
        width: 15,
        height: 15,
    },
    tabsContainer: {
        gap: 15
    },
    signOutButtonContainer:{
        backgroundColor:'#B81D24',
        height:30,
        width:150,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'gray',
        elevation:3,
        marginTop:30,
        marginHorizontal:20,
    },
    signOutText:{
        fontSize:16,
        fontWeight:'700',
        color:'white'
    },
    profilePictureStyle:{
        width:80,
        height:80,
        borderRadius:50
    },
    tabName:{
        fontSize:18,
        fontWeight:'700',
        color:'#474A56'
    },
});
