import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Dimensions, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Images } from '../../Images';
import { itemsArray, Items } from '../../data';
import Carousel from 'react-native-snap-carousel';



const ITEM_WIDTH = 330; // Adjust as needed
const ITEM_MARGIN = 20; // Adjust as needed

export const MapScreen = ({ route }) => {
    const { selectedPlace, nearbyPlaces } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const carouselRef = useRef(null);

    const handlePress = () => {
        console.log('pressed');
        setModalVisible(true); // Show the modal
    };
    const getRandomItemName = () => {
        const randomIndex = Math.floor(Math.random() * itemsArray.length);
        return itemsArray[randomIndex].name;
    };


    const renderItem = ({ item, index }) => {

        return (
            <View style={[styles.itemContainer, { zIndex: -index }]}>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={{fontSize:20,fontWeight:'700',color:'black',marginVertical:10}}>{item.name}</Text>
                <View style={{ width: '100%', alignItems: 'flex-start' }}>
                    <View style={{ flexDirection: 'row',marginVertical:10,gap:5 }}>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>Hospital :</Text>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>{item.hospital}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginBottom:10,gap:5 }}>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>Equipment:</Text>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>{item.equipments}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginBottom:10,gap:5 }}>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>Experience:</Text>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>{`${item.experience} years`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginBottom:10,gap:5 }}>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>Distance:</Text>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>{`${item.distance} Kms`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginBottom:10,gap:5 }}>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>Price:</Text>
                        <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>{item.payment}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}
                initialRegion={{
                    latitude: selectedPlace.geometry.location.lat,
                    longitude: selectedPlace.geometry.location.lng,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                }}>
                {selectedPlace && (
                    <Marker
                        coordinate={{
                            latitude: selectedPlace.geometry.location.lat,
                            longitude: selectedPlace.geometry.location.lng,
                        }}
                        onPress={handlePress}
                    >
                        <View>
                            <Image source={Images.profile} style={{
                                width: 75,
                                height: 75,
                                borderWidth: 3,
                                borderColor: '#B81D24',
                                borderRadius: 75 / 2
                            }} />
                            <Text style={{ fontSize: 24, color: '#B81D24', fontWeight: '700' }}>{getRandomItemName()}</Text>
                        </View>
                    </Marker>
                )}
                {nearbyPlaces.slice(0, 5).map((place, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: place.geometry.location.lat,
                            longitude: place.geometry.location.lng,
                        }}
                        onPress={handlePress}
                    >
                        <View>
                            <Image source={Images.profile} style={{
                                width: 75,
                                height: 75,
                                borderWidth: 3,
                                borderColor: '#B81D24',
                                borderRadius: 75 / 2
                            }} />
                            <Text style={{ fontSize: 24, color: '#B81D24', fontWeight: '700' }}>{getRandomItemName()}</Text>
                        </View>
                    </Marker>
                ))}
            </MapView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContainer}>
                    <Carousel
                        ref={carouselRef}
                        layout={'default'}
                        data={itemsArray}
                        renderItem={renderItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width - 65}
                        activeSlideAlignment={'center'}
                        inactiveSlideScale={0.99}
                        invertStickyHeaders
                        inactiveSlideOpacity={0.7}
                    />
                    <TouchableOpacity
                        style={styles.modalCloseButton}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalCloseButton: {
        alignSelf: 'center',
        marginTop: 20,
    },
    itemContainer: {
        width: ITEM_WIDTH,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#B81D24',
    },
    itemImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        marginBottom: 5,
        opacity:0.8
    },
    markerImage: {
        width: 75,
        height: 75,
        borderWidth: 3,
        borderColor: '#B81D24',
        borderRadius: 75 / 2
    },
    markerLabel: {
        fontSize: 24,
        color: 'red',
        fontWeight: '700'
    },
    confirmButton: {
        backgroundColor: '#B81D24',
        width: 180,
        height: 50,
        marginVertical:30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF'
    }
});