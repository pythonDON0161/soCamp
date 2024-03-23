import {View,Text,StyleSheet} from 'react-native';
import Header from './Header';
import Colors from '../../Utils/Colors';

export default function HomeScreen(){
    return(
        <View>
            <Header/> 
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    poppinsLight: {
      fontFamily: 'poppins-bold',
      fontSize: 20,
    },
  });
  