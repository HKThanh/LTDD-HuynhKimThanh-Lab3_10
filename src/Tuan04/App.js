import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Tiki from './Screen/Tiki';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Tiki/>
      <StatusBar style="auto" />
    </View>
  );
}
