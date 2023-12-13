import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomizedButton from './src/components/button';
import { useState } from 'react';
import HomeScreen from './src/pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/pages/SurveysList';
import SingleSurvey from './src/pages/SingleSurvey';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{animation:'fade',headerLargeTitle:true,statusBarColor:'#31304D', header:()=><></>} 
        }
        />
        <Stack.Screen name="Surveys" component={Profile} />
        <Stack.Screen name="Survey" component={SingleSurvey} options={{header:()=><></>}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
