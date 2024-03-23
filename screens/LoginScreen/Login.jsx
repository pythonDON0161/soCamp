import { StyleSheet, Text, View, Image,input,TouchableOpacity, 
    SafeAreaView,   Alert, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Colors from '../../Utils/Colors';
import React  , {useState,useEffect}from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./../../hooks/warmUpbrowser";


//WebBrowser.maybeCompleteAuthSession();


function loginForm(){}


export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View style={{  alignItems:'center',
                    backgroundColor:Colors.PRIMARY,
                    width:'100%',
                    height:'100%'}}> 
        <Image source={require('./../../assets/images/adaptive-icon.png')}
                style={styles.loginImage} />


        <View style={styles.subContainer}>
            <Text style={styles.innerHeading}> Welcome </Text>
            <Text style={styles.subHeading}> Log in to your SoCamp Account </Text>
       
            <Button title="Sign In With Google" 
            
            style={{color:Colors.PRIMARY}}  
            onPress={onPress}  >
          
          </Button>

        </View>
        
       
    
    </View>
  )
}






















const styles = StyleSheet.create({
    loginImage:{
        width:  280,
        height: 250,
        marginTop:70,
        borderWidth:4,
        borderColor: Colors.Black,
        borderRadius:15
    },
    subContainer:{
        width: '80%',
        backgroundColor: '#fff',
        height: '20%',
        marginTop: -20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:17
    },
    poppinsBold: {
        fontFamily: 'poppins-bold',
        fontSize:28, 
        color:'#fff', 
        textAlign:'center',
        marginTop:-20,
        padding:20
      },

      poppinsLight: {
        fontFamily: 'poppins-light',
        fontSize:20, 
        color:'#000', 
        textAlign:'center',
        marginTop:-20,
        padding:20

      },
      innerHeading: {
        fontFamily: 'poppins-regular',
        fontSize:22, 
        color:'#000', 
        textAlign:'center',
        marginTop:0,
        padding:5
      },

      subHeading:{
        fontFamily: 'poppins-medium',
        fontSize:14,
        width:'100%' ,
        color:'#000', 
        textAlign:'center',
        padding:5
      },

      button:{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        borderRadius:99,
        marginTop:20

      }

})