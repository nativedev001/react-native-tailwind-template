React Native Project with Tailwind CSS

This is a new React Native project, bootstrapped using @react-native-community/cli and preconfigured with Tailwind CSS using NativeWind.

Getting Started

Note: Make sure you have completed the React Native - Environment Setup instructions till the "Creating a new application" step before proceeding.

Step 1: Install Dependencies

Before starting the server, install the required dependencies by running:

npm install

This will install all necessary packages, including Tailwind CSS for React Native.

Step 2: Start the Metro Server

First, you need to start Metro, the JavaScript bundler that ships with React Native.

Run the following command from the root of your React Native project:

# using npm
npm start

# OR using Yarn
yarn start

Step 3: Start your Application

Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android or iOS app:

For Android

# using npm
npm run android

# OR using Yarn
yarn android

For iOS

# using npm
npm run ios

# OR using Yarn
yarn ios

If everything is set up correctly, you should see your new app running in your Android Emulator or iOS Simulator shortly, provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

Step 4: Tailwind Setup Validation

To verify Tailwind is working properly, modify your App.tsx file with Tailwind classes. For example:

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
      <View className="p-4 border border-gray-300 rounded-lg">
        <Text className="text-xl font-bold text-blue-600">
          Hello, Tailwind is working in React Native!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

Step 5: Modify and Reload

Open App.tsx in your text editor of choice and edit some lines.

For Android: Press the R key twice or select "Reload" from the Developer Menu (Ctrl + M (Windows/Linux) or Cmd ⌘ + M (macOS)).

For iOS: Hit Cmd ⌘ + R in your iOS Simulator to reload the app and see your changes.

Example Output:

Below is an example image showing the integration of Tailwind CSS in React Native:



Congratulations! 🎉

You've successfully set up and started a React Native app with Tailwind CSS. 🎉

Troubleshooting

If Tailwind or React Native isn't working as expected, refer to the following:

React Native Troubleshooting Guide

NativeWind Documentation

Learn More

To learn more about React Native and Tailwind CSS, take a look at the following resources:

React Native Website - Learn more about React Native.

Tailwind CSS - Tailwind's official website.

NativeWind Docs - Tailwind for React Native.

Getting Started - Overview of React Native and how to set up your environment.

Learn the Basics - A guided tour of the React Native basics.

Happy Coding! 🚀