/* eslint-disable react-native/no-inline-styles */
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
import {FONTS_body, FONTS_title, SHADOW} from '../styles/styles';
import {STYLE_app_container} from '../styles/styles';
import {Currensy} from '../type/Curreny';
import {trendingCurrencies} from '../../data/data';
import {COLORS} from '../styles/theme';
import {CustomButton} from '../ui/CustomButton';

export const Market = () => {
  const [currencies, setCurrencies] = useState<Currensy[]>(trendingCurrencies);
  // const [search, setSearch] = useState('');
  const navigation = useNavigation();

  // const updateSearch = (text: string) => {
  //   setSearch(text);
  // };

  return (
    <ScrollView>
      <View style={{...STYLE_app_container, ...styles.container}}>
        <View>
          <Text style={{...FONTS_title, ...styles.title}}>Popular Pairs</Text>
          <View>
            {currencies.map(item => (
              <TouchableOpacity key={item.id}>
                <View style={{...styles.itemWrap, ...SHADOW}}>
                  <View style={styles.item}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={item.image} />
                      <Text
                        style={{
                          ...FONTS_body,
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
  container: {
    marginTop: 50,
    flex: 1,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  itemWrap: {
    marginBottom: 10,
    height: 68,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
