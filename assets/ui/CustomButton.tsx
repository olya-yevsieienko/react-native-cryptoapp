import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FONTS_body} from '../styles/styles';

type Props = {
  title: string;
  bgrColor: string;
  textColor: string;
  width: string;
  onPress: () => void;
};

export const CustomButton: React.FC<Props> = ({
  title,
  bgrColor,
  textColor,
  width,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.wrap,
        ...{backgroundColor: bgrColor},
        ...{width: width},
      }}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={{...styles.text, ...FONTS_body, ...{color: textColor}}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 16,
  },
  text: {
    padding: 12,
    textAlign: 'center',
  },
});
