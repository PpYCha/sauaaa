import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createNativeStackNavigator();

export const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        headerShown="false"
      />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};
