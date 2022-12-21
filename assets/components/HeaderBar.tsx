/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../styles/theme';

export const HeaderBar = ({right}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrap}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../icons/back.png')}
            resizeMode="contain"
            style={styles.iconBack}
          />
          <Text
            style={{
              fontFamily: 'montserrat_regular',
              fontSize: 18,
              color: COLORS.BLACK,
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>

      {right && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity style={{padding: 12}}>
            <Image
              source={require('../icons/star.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.YELLOW,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  iconBack: {
    marginRight: 4,
    width: 32,
  },
});
