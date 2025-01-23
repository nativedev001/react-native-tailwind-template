/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import "./global.css"


function App(): React.JSX.Element {
  return (
    <SafeAreaView className='bg-gray-300'>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className='bg-white h-screen' contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View className="border-l-2 border-gray-50 bg-red-500 p-5 rounded-md">
          <Text className="text-1xl text-white">
            Hello Tailwind here
          </Text>
          <Text className='text-center text-white'>Faizan Dev</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
