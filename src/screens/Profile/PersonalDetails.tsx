import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Images } from '../../Images';


export const PersonalDetails = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('John Doe');
    const [location, setLocation] = useState('Mumbai, Maharashtra');
    const [phoneNumber, setPhoneNumber] = useState('+91 98765 65566');
    const [email, setEmail] = useState('john123@gmail.com');
    const [dob, setDob] = useState('20/08/2003');
    const [age, setAge] = useState('20 years old');
    const [allergies, setAllergies] = useState('None');
    const [medicalConditions, setMedicalConditions] = useState('None');
    const [allergiesModalVisible, setAllergiesModalVisible] = useState(false);
    const [medicalConditionsModalVisible, setMedicalConditionsModalVisible] = useState(false);



    const renderEditableField = (value: any, setValue: any) => {
        if (isEditing) {
            return (
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                />
            );
        } else {
            return (
                <Text style={styles.infoText}>{value}</Text>
            );
        }
    };


    const renderDropdownModal = (visible:any, setVisible:any, options:any, selectedOption:any, setOption:any) => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {options.map(option => (
                            <TouchableOpacity
                                key={option}
                                onPress={() => {
                                    setOption(option);
                                    setVisible(false);
                                }}
                                style={styles.modalOption}
                            >
                                <Text style={styles.optionsStyle}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardStyle}>
                <View style={styles.header}>
                    <View>
                        <Image source={Images.profilePicture} style={styles.profilePictureStyle} />
                        <View style={styles.addressContainer}>
                            {renderEditableField(location, setLocation)}
                        </View>
                    </View>
                    <View style={styles.editIconContainer}>
                        {renderEditableField(name, setName)}
                        <TouchableOpacity onPress={() => setIsEditing(!isEditing)} >
                            <Image source={Images.pencil} style={styles.editIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoContainer}>
                        {renderEditableField(phoneNumber, setPhoneNumber)}
                    </View>
                    <View style={styles.infoContainer}>
                        {renderEditableField(email, setEmail)}
                    </View>
                    <View style={styles.dobAgeContainer}>
                        <View style={styles.dobInfoContainer}>
                            {renderEditableField(dob, setDob)}
                        </View>
                        <View style={styles.dobInfoContainer}>
                            {renderEditableField(age, setAge)}
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.dropdownContainer}
                        onPress={() => setAllergiesModalVisible(true)}
                    >
                        <Text style={styles.dropdownLabel}>{
                            allergies !== 'None' ? allergies : 'Allergies'
                        }</Text>
                        <Image source={Images.rightArrow} style={styles.downIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.dropdownContainer}
                        onPress={() => setMedicalConditionsModalVisible(true)}
                    >
                        <Text style={styles.dropdownLabel}>{
                            medicalConditions !== 'None' ? medicalConditions : 'Medical Conditions'
                        }</Text>
                        <Image source={Images.rightArrow} style={styles.downIcon}/>
                    </TouchableOpacity>
                </View>
                {renderDropdownModal(
                    allergiesModalVisible,
                    setAllergiesModalVisible,
                    ['None', 'Peanuts', 'Lactose', 'Gluten', 'Shellfish'],
                    allergies,
                    setAllergies
                )}
                {renderDropdownModal(
                    medicalConditionsModalVisible,
                    setMedicalConditionsModalVisible,
                    ['None', 'Asthma', 'Diabetes', 'Hypertension', 'Arthritis'],
                    medicalConditions,
                    setMedicalConditions
                )}
                <View style={styles.connectedBinContainer}>
                <TouchableOpacity style={styles.connectionButton}>
                    <Text style={styles.connectedText}>Connected With</Text>
                    <Image source={Images.apple} style={[styles.connectIcon, { tintColor: 'white' }]} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={Images.delete} style={styles.binIcon}/>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.connectionButton}>
                    <Text style={styles.connectedText}>Connected With</Text>
                    <Image source={Images.google} style={styles.connectIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        marginHorizontal: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    info: {
        marginBottom: 20,
    },
    editIcon: {
        width: 15,
        height: 15,
        marginLeft: 40,
        tintColor: 'white'
    },
    editIconContainer: {
        gap: 60,
        position:'absolute',
        left:'30%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardStyle: {
        padding: 10,
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#B81D24'
    },
    profilePictureStyle: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    infoText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
        paddingBottom: 10,
        paddingLeft: 5,
    },
    infoContainer: {
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        borderStyle: 'dashed',
        marginVertical: 10,
    },
    addressContainer: {
        marginTop: 10,
        width: 100,
        flexWrap: 'nowrap'
    },
    dobAgeContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingVertical: 5,
        gap: 30,
    },
    dobInfoContainer: {
        width: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        borderStyle: 'dashed'
    },
    input: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    connectIcon: {
        width: 20,
        height: 20,
        marginLeft: 40
    },
    connectionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#D33433',
        flexDirection: 'row',
        width: 250,
        height: 30
    },
    connectedText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    dropdownContainer: {
        paddingHorizontal:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        borderStyle: 'dashed',
        marginVertical: 10,
        paddingBottom:10,
        marginHorizontal: 10,
    },
    dropdownLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    dropdownValue: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#D33433',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderStyle:'dashed',
        borderBottomColor: 'white',
    },
    downIcon:{
        width:15,
        height:15,
        tintColor:'white',
        transform: [{ rotate: '90deg' }]
    },
    binIcon:{
        width:25,
        height:25,
        tintColor:'white'
    },
    connectedBinContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:30
    },
    optionsStyle:{
        fontSize:16,
        fontWeight:'400',
        color:'white'
    },
});

