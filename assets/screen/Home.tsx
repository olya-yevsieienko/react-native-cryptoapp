/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  LogBox,
} from 'react-native';
import {transactionHistory} from '../../data/data';
import {Header} from '../components/Header';
import {History} from '../components/TransactionHistory';
import {Trending} from '../components/Trending';
import {SIZE} from '../styles/size';
import {
  FONTS_body_1,
  FONTS_body_2,
  FONTS_body_3,
  FONTS_title,
  SHADOW,
  STYLE_app_container,
} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {TransactionHistory} from '../type/TransactionHistory';
import {CustomButton} from '../ui/CustomButton';

export const Home = () => {
  const [transHistory, setTransHistory] =
    useState<TransactionHistory[]>(transactionHistory);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  function renderPriceAlert() {
    return (
      <TouchableOpacity
        style={{...styles.alertWrap, ...SHADOW}}
        activeOpacity={0.7}>
        <Image
          source={require('../images/bell.png')}
          style={styles.alertIconBell}
        />
        <View>
          <Text style={FONTS_body_3}>Set Price Alert</Text>
          <Text style={FONTS_body_2}>
            Get notifed when your coins are moving
          </Text>
        </View>

        <Image
          source={require('../icons/right.png')}
          style={styles.alertIconRight}
        />
      </TouchableOpacity>
    );
  }

  function renderInviteBlock() {
    return (
      <View style={{...styles.inviteWrap, ...SHADOW}}>
        <View>
          <Text style={{...FONTS_body_1, ...styles.inviteTitle}}>
            Refer and Earn
          </Text>
          <Text style={{...FONTS_title, ...styles.inviteText}}>
            Refer your Friends and Win Cryptocoins
          </Text>
        </View>
        <CustomButton
          title={'Refer Now'}
          bgrColor={COLORS.WHITE}
          textColor={COLORS.YELLOW}
          width={'40%'}
          onPress={() => console.log('Refer Now')}
        />
        <Image
          source={require('../images/friends.png')}
          style={styles.buttonImage}
        />
      </View>
    );
  }

  function renderTransitionHistory() {
    return <History history={transHistory} />;
  }

  return (
    <ScrollView>
      <View style={styles.homeWrap}>
        <Header />
        <Trending />

        <View style={STYLE_app_container}>
          {renderPriceAlert()}
          {renderInviteBlock()}
          {renderTransitionHistory()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeWrap: {
    flex: 1,
  },
  alertWrap: {
    marginBottom: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
  },
  alertIconBell: {
    marginRight: 8,
    width: SIZE.ICON_SIZE,
    height: SIZE.ICON_SIZE,
  },
  alertIconRight: {
    tintColor: COLORS.GRAY,
  },
  inviteWrap: {
    marginBottom: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: COLORS.YELLOW,
  },
  inviteTitle: {
    marginBottom: SIZE.MARGIN_BOTTOM_TITLE,
    color: COLORS.WHITE,
  },
  inviteText: {
    marginBottom: 20,
    color: COLORS.WHITE,
  },
  buttonImage: {
    position: 'absolute',
    left: 220,
    zIndex: -1,
  },
});
