import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SIZE} from '../styles/size';
import {
  FONTS_body_2,
  FONTS_body_3,
  FONTS_title,
  SHADOW,
} from '../styles/styles';
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
      <View style={styles.container}>
        <Image
          source={require('../icons/transactions.png')}
          style={styles.icon}
        />
        <View>
          <Text style={FONTS_body_2}>{item.description}</Text>
          <Text style={FONTS_body_2}>{item.date}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text
          style={{
            ...FONTS_body_2,
            ...{color: item.type === 'B' ? COLORS.GREEN : COLORS.RED},
          }}>
          {item.amount} {item.currency}
        </Text>
        <Image
          source={require('../icons/right.png')}
          style={{tintColor: COLORS.GRAY}}
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
      <Text style={{...styles.title, ...FONTS_title}}>Transaction History</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: SIZE.MARGIN_BOTTOM_TITLE,
  },
  icon: {
    marginRight: 8,
    width: SIZE.ICON_SIZE,
    height: SIZE.ICON_SIZE,
  },
  renderItem: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
});
