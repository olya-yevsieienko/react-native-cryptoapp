import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../styles/theme';
import {Balance} from './Balance';

export const Header = () => {
  return (
    <View style={styles.headerWrap}>
      <TouchableOpacity
        onPress={() => console.log('notification')}
        style={styles.notificationWrap}>
        <Image
          source={require('../icons/notification.png')}
          resizeMode="contain"
          style={styles.notification}
        />
      </TouchableOpacity>
      <Balance />
      <Image source={require('../images/chart.png')} style={styles.imageBgr} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    marginBottom: 78,
    height: 240,
    width: '100%',
    backgroundColor: COLORS.PRIMARY,
    overflow: 'hidden',
  },
  notificationWrap: {
    padding: 10,
    alignItems: 'flex-end',
  },
  notification: {
    tintColor: COLORS.WHITE,
  },
  imageBgr: {
    position: 'absolute',
    zIndex: -1,
    top: 8,
    right: -30,
    width: '100%',
    opacity: 0.2,
    tintColor: COLORS.WHITE,
    transform: [{rotate: '20deg'}],
  },
});
