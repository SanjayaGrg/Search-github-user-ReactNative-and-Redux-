import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';


const ProfileScreen = ({ closeModal }) => {

  // const {username} = useParams
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // console.log("checking user data", user);

  // const loading = user.loading;
  const userData = user.user_details;




  if (!userData) {
    console.log("User not found");
    // return null
  } else {
    console.log("get data", userData.avatar);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' }}
        onPress={closeModal}
      >
        <Icon
          name='cancel'
          size={30}
          color='#d8e9a8'
        />
      </TouchableOpacity>
      <ScrollView>

        <Image
          source={{uri: userData.avatar}}
          style={styles.image}
          resizeMode='contain'
        />
        <View style={styles.profileContainer}>
          <View>
            <Text style={[styles.profileText, { fontSize: 25, fontWeight: 'bold' }]}>{userData.name}</Text>
            <Text style={[styles.profileText, { fontWeight: 'bold' }]}>{userData.username}</Text>
            <Text style={[styles.profileText, { marginVertical: 15 }]}>{userData.bio}
            </Text>
            <Text style={styles.profileText}>{userData.public_repo} Repositories</Text>

          </View>
          <View style={styles.profileFollowers}>
            <View style={styles.followers}>
              <Icon
                name='people'
                size={20}
                style={styles.icons}
                color="white"
              />
              <Text style={[styles.profileText, { fontWeight: 'bold' }]}>{userData.follower}<Text style={{ fontWeight: '300' }}> followers</Text></Text>
            </View>
            <View style={styles.following}>
              <Icon
                name='people'
                size={20}
                style={styles.icons}
                color="white"
              />
              <Text style={[styles.profileText, { fontWeight: 'bold' }]}>{userData.following} <Text style={{ fontWeight: '300' }}>following</Text></Text>
            </View>

          </View>

          <View>
            {
              userData.email ?
                <Text style={styles.profileText}><Icon
                  name='email'
                  size={20}
                  style={styles.icons}
                />{userData.email}</Text> : null
            }

            <Text style={styles.profileText}><Icon
              name='location-on'
              size={20}
              style={styles.icons}
            /> {userData.location} </Text>

            {
              userData.company ?
                <Text style={styles.profileText}><Icon
                  name='work'
                  size={20}
                  style={styles.icons}
                /> {userData.company} </Text> : null
            }
            
            {
              userData.twitter ?
              <Text style={styles.profileText}><Icon
              name='people'
              size={20}
              style={styles.icons}
            /> {userData.twitter} </Text>: null

            }
            
            {
              userData.website ?
              <Text style={styles.profileText}><Icon
              name='web'
              size={20}
              style={styles.icons}
            /> {userData.website} </Text>: null
            }
            

            <Text style={styles.profileText}> {userData.join_date}</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141e30',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 5
  },
  image: {
    width: '60%',
    maxHeight: 200,
    maxWidth: 200,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    alignSelf: 'center',
    padding: 100,
    marginVertical: 30

  },
  profileContainer: {
    marginVertical: 30
  },
  profileText: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'

  },
  followers: {
    flexDirection: 'row',
    color: '#fff'
  },
  following: {
    flexDirection: 'row',
    color: '#fff'
  },
  profileFollowers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  icons: {
    marginHorizontal: 5,
    padding: 2
  }
})