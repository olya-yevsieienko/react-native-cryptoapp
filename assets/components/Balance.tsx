import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../styles/theme';
import {portfolio} from '../../data/data';
import {FONTS_body_2, FONTS_title} from '../styles/styles';

export const Balance = () => {
  return (
    <View style={styles.wrap}>
      <Text style={{...FONTS_title, ...styles.text}}>Current balance</Text>
      <Text style={{...FONTS_title, ...styles.text, ...{fontSize: 40}}}>
        ${portfolio.balance}
      </Text>
      <Text style={{...FONTS_body_2, ...styles.text}}>
        {portfolio.changes} Last 24 hours
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    color: COLORS.WHITE,
  },
});
