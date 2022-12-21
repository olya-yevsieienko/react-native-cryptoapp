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
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'montserrat_bold',
                    color: COLORS.BLACK,
                  }}>
                  {item.currency}
                </Text>
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
      <Text style={{...styles.trendingText, ...styles.text}}>Trending</Text>
      <FlatList
        data={trending}
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
    top: 150,
  },
  renderItemWrap: {
    marginBottom: 10,
    width: 180,
    borderRadius: 22,
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
    marginRight: 20,
    width: 40,
    height: 40,
  },
  trendingText: {
    marginBottom: 4,
    marginLeft: 20,
    fontSize: 18,
    color: COLORS.WHITE,
  },
  text: {
    fontFamily: 'montserrat_regular',
  },
});
