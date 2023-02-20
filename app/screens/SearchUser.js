import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUser } from '../redux/SearchAction';
import ProfileScreen from './ProfileScreen';


const SearchUser = () => {

    // modal
    const [modalVisible, setModalVisible] = useState(false)
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const openModal = ()=>{
        setModalVisible(true);
    }

    const closeModal=()=>{
        setModalVisible(false);
        setUsername("");
    }

    let validateSearch = /^.{3,}$/;

    const handleSubmit = () => {
        
        if(validateSearch.test(username)){
            // requesting username from searchUser using dispatch
            dispatch(searchUser(username));
        }
        openModal();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Search GitHub User
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter GitHub Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.searchButton}
                >
                    <Text style={styles.button}>Search User</Text>
                </TouchableOpacity>
            </View>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <ProfileScreen closeModal={closeModal}/>
            </Modal>
        </View>
    )
}

export default SearchUser

const styles = StyleSheet.create({
    container: {
        marginVertical: 80,
        padding: 10,
        // backgroundColor: '#34495e',
        display: 'flex'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#27ae60'

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignContent: 'center',
        marginVertical: 15

    },
    input: {
        borderWidth: 1,
        borderColor: '#bdc3c7',
        borderRadius: 12,
        height: 45,
        width: '60%',
        padding: 10

    },
    searchButton: {
        marginHorizontal: 15,
        backgroundColor: '#2ecc71',
        height: 45,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    button: {
        padding: 5,
        textAlign: 'center',
        marginVertical: 4,
        color: '#fff'
    },
})