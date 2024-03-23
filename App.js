import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated,  
  Platform, Button, SafeAreaView,  } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFonts } from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Login from './screens/LoginScreen/Login'
import { ClerkProvider, SignedIn,SignedOut } from '@clerk/clerk-expo';
import {SignIn} from "./screens/SignIn/SignInPage"
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import HomeScreen from './screens/HomeScreen/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/TabNavigation';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//Instruct SplashScreen not to hide yet, we want to do this manually
//SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
//}); 


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key,value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  /*
  let [fontsLoaded] = useFonts({
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf')
  })
   */
  
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
       
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_c2Vuc2libGUtc3RpbmdyYXktMC5jbGVyay5hY2NvdW50cy5kZXYk'> 
        <SafeAreaView   >
  <View onLayout={onLayoutRootView}  >
      
      { /*Signed in Component*/}
       <SignedIn>
          <NavigationContainer>
           { /* <Text>you are signd in</Text>
            <TabNavigation/> */ }
          <SignIn/>
          </NavigationContainer>
        </SignedIn>
        { /*Signed in Component*/}

        
        { /*Signed Out Component*/}
        <SignedOut >
          <Login/>
        </SignedOut>
        { /*Signed Out Component*/}

  </View> 
  </SafeAreaView>

    </ClerkProvider>
  );
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

