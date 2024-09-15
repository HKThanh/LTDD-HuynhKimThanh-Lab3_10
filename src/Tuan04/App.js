import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Tiki from './Screen/Tiki';
import Screen2c from './Screen/Screen2c';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Tiki/> */}
      <Screen2c/>
      <StatusBar style="auto" />
    </View>
  );
}
