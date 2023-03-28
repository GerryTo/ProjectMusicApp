import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigationStack } from './components/RootNavigationStack';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <NavigationContainer>
        <RootNavigationStack/>
      </NavigationContainer>
    </SafeAreaView>
  );
}