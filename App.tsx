import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './assets/navigation/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './assets/screen/Home';
import {UserSettings} from './assets/screen/UserSettings';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Tabs'} component={Tabs} />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'UserSettings'} component={UserSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
