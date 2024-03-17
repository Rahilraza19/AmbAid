import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Images } from '../../Images';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface PlaceDetails {
  geometry: {
     location: {
       lat: number;
       lng: number;
     };
  };
 }

export const Home = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);


  const Gapi='googleMapsApi';
  const handleProfilePress = () => {
    navigation.navigate('Profile')
  };

  const handleAmbulanceCall = () => {
    if (selectedPlace) {
      setShowLoader(true);
      fetchNearbyPlaces(selectedPlace)
        .then(nearbyPlaces => {
          setShowLoader(false);
          navigation.navigate('MapScreen', { selectedPlace, nearbyPlaces });
        })
        .catch(error => {
          setShowLoader(false);
          console.error('Error fetching nearby places:', error);
        });
    } else {
      // Handle case when no place is selected
    }
  };

  const fetchNearbyPlaces = async (selectedPlace) => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${selectedPlace.geometry.location.lat},${selectedPlace.geometry.location.lng}&radius=5000&type=hospital&key=${Gapi}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw error;
    }
  };
  
 
  const renderLoaderModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showLoader}
      onRequestClose={() => {
        setShowLoader(false);
      }}>
      <View style={styles.centeredView}>
        <FastImage source={Images.ambulanceGif} style={styles.modalImage} />
        <Text style={styles.modalText}>Searching for ambulance</Text>
      </View>
    </Modal>
  );

  
  

  return (
    <View style={styles.container}>
      {renderLoaderModal()}
      <View style={styles.greetingsContainer}>
        <View style={styles.greetingsTextContainer}>
          <Text style={styles.greeting}>Hi Oorvi ,</Text>
          <Text style={styles.welcome}>Welcome back !</Text>
        </View>
        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={Images.user} style={styles.userIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Image source={Images.search} style={styles.searchIcon} />
        <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          setSelectedPlace(details);
        }}
        query={{
          key: Gapi,
          language: 'en',
          type: 'hospital'
        }}
        fetchDetails={true}
        styles={{
          textInput: styles.searchBar,
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
        <Image source={Images.mic} style={styles.micIcon} />
      </View>
      <View style={styles.illustrationContainer}>
        <Image source={Images.illustration} style={styles.illustrationStyle} />
      </View>
      <TouchableOpacity style={styles.varifyButtonContainer} onPress={handleAmbulanceCall}>
        <Text style={styles.verifyText}>Call Ambulence</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: 'white',
    elevation: 3,
    borderWidth: 1,
    marginTop: 20,
  },
  searchBar: {
    fontSize: 18,
    fontWeight: '700',
    color: '#B81D24',
    height: 50,
    width: '80%',
    paddingLeft: 20,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationStyle: {
    width: 150,
    height: 150
  },
  varifyButtonContainer: {
    backgroundColor: '#B81D24',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'gray',
    elevation: 3,
    marginBottom: 20
  },
  verifyText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white'
  },
  greetingsTextContainer: {
    flexDirection: 'column'
  },
  greetingsContainer: {
    marginTop: 20,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userIcon: {
    width: 30,
    height: 30
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
    tintColor: 'gray'
  },
  micIcon: {
    width: 15,
    height: 15,
    marginRight: 20,
    tintColor: 'gray'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalImage: {
    width: 200,
    height: 150,
  },
  modalText: {
    marginTop: 10,
    color: 'black',
    fontSize: 25,
  },
});
