import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import React from "react";

SplashScreen.preventAutoHideAsync();
const Layout = () => {
  const [fontsLoaded] = useFonts({
    // DMBold: require("../app/assets/fonts/"),
    // DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    // DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return  <Stack/>;
 }


 export default Layout;