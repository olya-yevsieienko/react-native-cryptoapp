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
import {SHADOW} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {TransactionHistory} from '../type/TransactionHistory';

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
          <Text style={{fontFamily: 'montserrat_bold', color: COLORS.BLACK}}>
            Set Price Alert
          </Text>
          <Text style={{fontFamily: 'montserrat_regular', fontSize: 12}}>
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
          <Text style={styles.inviteTitle}>Refer and Earn</Text>
          <Text style={styles.inviteText}>
            Refer your Friends and Win Cryptocoins
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('invite')}
          style={styles.buttonWrap}
          activeOpacity={0.7}>
          <Text style={styles.buttonText}>Refer Now</Text>
        </TouchableOpacity>
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

        <View style={{marginHorizontal: 15}}>
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
    paddingBottom: 100,
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
    marginBottom: 8,
    fontFamily: 'montserrat_regular',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  inviteText: {
    marginBottom: 20,
    fontFamily: 'montserrat_bold',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  buttonWrap: {
    padding: 8,
    width: '30%',
    borderRadius: 12,
    backgroundColor: COLORS.WHITE,
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.YELLOW,
  },
  buttonImage: {
    position: 'absolute',
    left: 220,
    zIndex: -1,
  },
});
