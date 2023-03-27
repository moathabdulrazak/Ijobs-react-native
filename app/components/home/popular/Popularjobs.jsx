import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router"
import { useState } from "react"


import styles from './popularjobs.style'

import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard.jsx'

const Popularjobs = () => {
  const router =  useRouter()
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs