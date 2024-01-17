import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  Home,
  RNpaper,
  SM,
  TBK,
  TBM,
  LBM,
  LBK,
  MK,
  MU
} from '../pages/index';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="RNpaper" component={RNpaper} options={{headerShown: false}}/>              
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="MK" component={MK} options={{headerShown: false}}/>
        <Stack.Screen name="SM" component={SM} options={{headerShown: false}}/>
        <Stack.Screen name="TBK" component={TBK} options={{headerShown: false}}/>
        <Stack.Screen name="TBM" component={TBM} options={{headerShown: false}}/>
        <Stack.Screen name="LBM" component={LBM} options={{headerShown: false}}/>
        <Stack.Screen name="LBK" component={LBK} options={{headerShown: false}}/>
        <Stack.Screen name="MU" component={MU} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
