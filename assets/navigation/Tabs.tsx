import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screen/Home';
import {Market} from '../screen/Market';
import {Profile} from '../screen/Profile';
import {SIZE} from '../styles/size';
import {Details} from '../screen/Details';
import {COLORS} from '../styles/theme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreen}>
              <Image
                source={require('../icons/home.png')}
                style={{
                  ...styles.icon,
                  ...{tintColor: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}
              />
              <Text
                style={{
                  ...styles.tabBarScreenText,
                  ...{color: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreen}>
              <Image
                source={require('../icons/market.png')}
                style={{
                  ...styles.icon,
                  ...{tintColor: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}
              />
              <Text
                style={{
                  ...styles.tabBarScreenText,
                  ...{color: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}>
                Market
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreen}>
              <Image
                source={require('../icons/details.png')}
                style={{
                  ...styles.icon,
                  ...{tintColor: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}
              />
              <Text
                style={{
                  ...styles.tabBarScreenText,
                  ...{color: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}>
                Details
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreen}>
              <Image
                source={require('../icons/user.png')}
                style={{
                  ...styles.icon,
                  ...{tintColor: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}
              />
              <Text
                style={{
                  ...styles.tabBarScreenText,
                  ...{color: focused ? COLORS.PRIMARY : COLORS.BLACK},
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonBgr: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  icon: {
    width: SIZE.ICON_SIZE,
    height: SIZE.ICON_SIZE,
  },
  tabBarScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  tabBarScreenText: {
    fontSize: 14,
  },
});
