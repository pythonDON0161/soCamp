import { View, Text,StyleSheet } from 'react-native'
import React from 'react';
import Colors from '../../Utils/Colors';

export default function Header() {
        const{user,isLoading} = useUser();
  return user&& (
    <View style={styles.container}>
        <View>
          <Image source={{uri:user?.imageUrl}} 
           style={styles.userImage } />
        </View>
        <View>
            <Text>Welcome,</Text>
            <Text>{user?.fullName}</Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({ 
    contianer:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomLeftRadius:25,
    },
    userImage:{
        width: 45,
        height:45,
        borderRadius:99
    }

  })