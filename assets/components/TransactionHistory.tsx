/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SHADOW} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {TransactionHistory} from '../type/TransactionHistory';

type PropsItem = {
  item: TransactionHistory;
};

const renderItem: React.FC<PropsItem> = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.renderItem}
      onPress={() => console.log(item)}
      activeOpacity={0.7}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../icons/transactions.png')}
          style={{
            marginRight: 10,
            width: 30,
            height: 36,
          }}
        />
        <View>
          <Text
            style={{
              marginBottom: 4,
              fontFamily: 'montserrat_regular',
              color: COLORS.BLACK,
            }}>
            {item.description}
          </Text>
          <Text
            style={{
              marginBottom: 12,
              fontFamily: 'montserrat_regular',
              fontSize: 12,
            }}>
            {item.date}
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            marginRight: 8,
            fontFamily: 'montserrat_regular',
            fontSize: 14,
            color: item.type === 'B' ? COLORS.GREEN : COLORS.BLACK,
          }}>
          {item.amount} {item.currency}
        </Text>
        <Image
          source={require('../icons/right.png')}
          style={{tintColor: COLORS.GREY}}
        />
      </View>
    </TouchableOpacity>
  );
};

type Props = {
  history: TransactionHistory[];
};

export const History: React.FC<Props> = ({history}) => {
  return (
    <View style={{...styles.wrap, ...SHADOW}}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        scrollEnabled={false}
        ItemSeparatorComponent={() => {
          return <View />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 16,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    marginBottom: 16,
    fontFamily: 'montserrat_bold',
    fontSize: 16,
    color: COLORS.BLACK,
  },
  flatList: {},
  renderItem: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.GREY,
    borderBottomWidth: 1,
  },
});
