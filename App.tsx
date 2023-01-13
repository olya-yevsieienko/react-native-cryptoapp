import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './assets/navigation/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './assets/screen/Home';
import {UserSettings} from './assets/screen/UserSettings';
import {Details} from './assets/screen/Details';
import {RootStackParamsList} from './assets/type/Navigation';
import {Market} from './assets/screen/Market';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'Tabs'} component={Tabs} />
        <RootStack.Screen name={'Home'} component={Home} />
        <RootStack.Screen name={'UserSettings'} component={UserSettings} />
        <RootStack.Screen name={'Details'} component={Details} />
        <RootStack.Screen name={'Market'} component={Market} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
