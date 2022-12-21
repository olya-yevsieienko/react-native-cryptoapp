import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../styles/theme';
import {portfolio} from '../../data/data';

export const Balance = () => {
  return (
    <View style={styles.wrap}>
      <Text style={{...{textTransform: 'uppercase'}, ...styles.text}}>
        Current balance
      </Text>
      <Text style={{...{fontSize: 44}, ...styles.text}}>
        ${portfolio.balance}
      </Text>
      <Text style={styles.text}>{portfolio.changes} Last 24 hours</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'montserrat_bold',
    color: COLORS.WHITE,
  },
});
