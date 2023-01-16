/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {trendingCurrencies} from '../../data/data';
import {SIZE} from '../styles/size';
import {FONTS_title} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {Currensy} from '../type/Curreny';

type PropsItem = {
  item: Currensy;
};

export const Trending = () => {
  const [trending, setTrending] = useState<Currensy[]>(trendingCurrencies);
  const navigation = useNavigation();

  const renderItem: React.FC<PropsItem> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderItemWrap}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', {currency: item})}>
        <View style={styles.renderItemContainer}>
          <View>
            <View style={styles.renderItemOptions}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.renderItemIcon}
              />
              <View>
                <Text style={FONTS_title}>{item.currency}</Text>
                <Text style={styles.text}>{item.code}</Text>
              </View>
            </View>
            <View>
              <Text
                style={{fontFamily: 'montserrat_bold', color: COLORS.BLACK}}>
                ${item.amount}
              </Text>
              <Text
                style={{
                  ...{color: item.type === 'I' ? COLORS.GREEN : COLORS.RED},
                  ...styles.text,
                }}>
                {item.changes}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrap}>
      <Text style={{...FONTS_title, ...styles.trendingText}}>Trending</Text>
      <FlatList
        data={trending.slice(0, 4)}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 160,
  },
  renderItemWrap: {
    marginBottom: 10,
    width: 180,
    borderRadius: SIZE.BORDER_RADIUS,
    marginHorizontal: 6,
    backgroundColor: COLORS.WHITE,
    elevation: 8,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: {width: 2, height: 2},
    shadowColor: COLORS.BLACK,
  },
  renderItemContainer: {
    padding: 10,
  },
  renderItemOptions: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  renderItemIcon: {
    marginRight: 10,
    width: 40,
    height: 40,
  },
  trendingText: {
    marginBottom: 4,
    marginLeft: 20,
    color: COLORS.WHITE,
  },
  text: {
    fontFamily: 'montserrat_regular',
  },
});
