import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {CURRENCY, FONTS_body_1, FONTS_title, SHADOW} from '../styles/styles';
import {STYLE_app_container} from '../styles/styles';
import {Currensy} from '../type/Curreny';
import {trendingCurrencies} from '../../data/data';
import {COLORS} from '../styles/theme';
import {CustomButton} from '../ui/CustomButton';
import {SIZE} from '../styles/size';

export const Market = () => {
  const [currencies] = useState<Currensy[]>(trendingCurrencies);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{...STYLE_app_container, ...styles.marketContainer}}>
        <View>
          <Text style={{...FONTS_title, ...styles.marketTitle}}>
            Popular Pairs
          </Text>
          <View>
            {currencies.map(item => (
              <TouchableOpacity key={item.id}>
                <View style={{...styles.itemWrap, ...SHADOW}}>
                  <View style={styles.item}>
                    <View style={styles.container}>
                      <Image source={item.image} style={CURRENCY} />
                      <Text
                        style={{
                          ...FONTS_body_1,
                          ...{marginLeft: 20},
                        }}>{`${item.code}/BUSD`}</Text>
                    </View>
                    <CustomButton
                      title={`${item.changes}`}
                      bgrColor={item.type === 'I' ? COLORS.GREEN : COLORS.RED}
                      textColor={COLORS.WHITE}
                      width={'24%'}
                      onPress={() =>
                        navigation.navigate('Details', {currency: item})
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marketContainer: {
    marginTop: 32,
  },
  marketTitle: {
    marginBottom: 24,
    textAlign: 'center',
  },
  itemWrap: {
    marginBottom: SIZE.MARGIN_BOTTOM_BLOCKS,
    height: 64,
    borderRadius: SIZE.BORDER_RADIUS,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
