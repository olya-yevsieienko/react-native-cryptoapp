/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS_body, FONTS_title} from '../styles/styles';

type Props = {
  icon: any;
  currency: string;
  code: string;
};

export const CurrencyLabel: React.FC<Props> = ({icon, currency, code}) => {
  return (
    <View style={styles.wrap}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{marginRight: 10, width: 25, height: 25}}
      />
      <View>
        <Text style={FONTS_title}>{currency}</Text>
        <Text style={FONTS_body}>{code}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
