/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {CurrencyLabel} from '../components/CurrencyLabel';
import {HeaderBar} from '../components/HeaderBar';
import {FONTS_body, SHADOW} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {Currensy} from '../type/Curreny';
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from 'victory-native';

type Props = {
  route: any;
  navigation: any;
};

export const Details: React.FC<Props> = ({route, navigation}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currensy>(null);

  useEffect(() => {
    const {currency} = route.params;
    setSelectedCurrency(currency);
  }, [route.params]);

  function renderChart() {
    return (
      <View style={{...styles.chartContainer, ...SHADOW}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
          </View>
          <View>
            <Text style={FONTS_body}>${selectedCurrency?.amount}</Text>
            <Text
              style={{
                ...FONTS_body,
                ...{
                  color:
                    selectedCurrency?.type === 'I' ? COLORS.GREEN : COLORS.RED,
                },
              }}>
              {selectedCurrency?.changes}
            </Text>
          </View>
        </View>

        {/* Chart */}
        {/* Options */}
        {/* Dots */}
      </View>
    );
  }

  return (
    <View style={styles.wrap}>
      <HeaderBar right={true} />

      <ScrollView>
        <View style={styles.chartWrap}>{renderChart()}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  chartWrap: {
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  chartContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
  },
});
