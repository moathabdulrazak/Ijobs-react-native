import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {COLORS, icons, images, SIZES, FONT} from './constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../app/components'
const Home = () => {

  const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}} >
      <Stack.Screen
      options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
        ),
        headerTitle: ""
      }}
      />

      
    </SafeAreaView>
  );
};

export default Home;
