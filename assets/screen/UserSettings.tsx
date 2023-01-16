/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {HeaderBar} from '../components/HeaderBar';
import {
  FONTS_body_1,
  FONTS_title,
  SHADOW,
  STYLE_app_container,
} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {RootStackParamsList} from '../type/Navigation';

type Props = NativeStackScreenProps<RootStackParamsList, 'UserSettings'>;

export const UserSettings = ({route, navigation}: Props) => {
  const {userName} = route.params;

  return (
    <View>
      <HeaderBar right={true} />
      <View style={STYLE_app_container}>
        <Text style={{...FONTS_title, ...styles.title}}>My Profile</Text>
        <View style={{marginBottom: 24}}>
          <TouchableOpacity
            style={{...styles.blockWrap, ...styles.itemSetting, ...SHADOW}}>
            <Text style={FONTS_body_1}>Avatar</Text>
            <View style={styles.blockWrap}>
              <Image
                source={require('../images/user.png')}
                style={styles.iconAvatar}
              />
              <Image
                source={require('../icons/right.png')}
                style={styles.iconRight}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.blockWrap, ...styles.itemSetting, ...SHADOW}}>
            <Text style={FONTS_body_1}>Display Name</Text>
            <View style={styles.blockWrap}>
              <Text style={FONTS_body_1}>{userName}</Text>
              <Image
                source={require('../icons/right.png')}
                style={styles.iconRight}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.blockWrap, ...styles.itemSetting, ...SHADOW}}>
            <Text style={FONTS_body_1}>User Name</Text>
            <View style={styles.blockWrap}>
              <Text style={FONTS_body_1}>{userName}</Text>
              <Image
                source={require('../icons/right.png')}
                style={styles.iconRight}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.blockWrap, ...styles.itemSetting, ...SHADOW}}>
            <Text style={FONTS_body_1}>Birthday</Text>
            <View style={styles.blockWrap}>
              <Image
                source={require('../icons/right.png')}
                style={styles.iconRight}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{...FONTS_title, ...styles.title}}>
          Account Information
        </Text>
        <TouchableOpacity
          style={{...styles.blockWrap, ...styles.itemSetting, ...SHADOW}}>
          <Text style={FONTS_body_1}>Update password</Text>
          <Image
            source={require('../icons/right.png')}
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemSetting: {
    paddingHorizontal: 12,
    marginVertical: 4,
    height: 52,
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    marginLeft: 16,
    marginBottom: 12,
  },
  iconAvatar: {
    height: 32,
    width: 32,
  },
  iconRight: {
    marginLeft: 12,
    height: 20,
    tintColor: COLORS.GRAY,
  },
});
