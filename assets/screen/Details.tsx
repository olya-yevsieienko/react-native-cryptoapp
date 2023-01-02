/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {CurrencyLabel} from '../components/CurrencyLabel';
import {HeaderBar} from '../components/HeaderBar';
import {FONTS_body, FONTS_title, SHADOW} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {Currensy} from '../type/Curreny';
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from 'victory-native';
import {VictoryCustomTheme} from '../styles/VictoryCustomTheme';
import {CustomButton} from '../ui/CustomButton';
import {ModalBuySell} from '../ui/ModalBuySell';

type Props = {
  route?: any;
  navigation: any;
};

export const Details: React.FC<Props> = ({route, navigation}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currensy>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalName, setModalName] = useState('');

  useEffect(() => {
    const {currency} = route?.params;
    setSelectedCurrency(currency);
  }, [route, route.params]);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleModalNameBuy = () => {
    setModalName('Buy');
  };

  const handleModalNameSell = () => {
    setModalName('Sell');
  };

  function renderChart() {
    return (
      <ScrollView>
        <View style={{marginBottom: 50}}>
          <View
            style={{
              ...styles.chartContainer,
              ...SHADOW,
              ...{marginVertical: 10, marginHorizontal: 8},
            }}>
            <View style={{flexDirection: 'row', marginVertical: 12}}>
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
                        selectedCurrency?.type === 'I'
                          ? COLORS.GREEN
                          : COLORS.RED,
                    },
                  }}>
                  {selectedCurrency?.changes}
                </Text>
              </View>
            </View>

            <View style={{marginBottom: 12}}>
              <VictoryChart
                theme={VictoryCustomTheme}
                height={200}
                width={350}
                padding={30}>
                <VictoryAxis
                  style={{
                    grid: {
                      stroke: 'transparent',
                    },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    axis: {
                      stroke: 'transparent',
                    },
                    grid: {
                      stroke: COLORS.LIGHT_GRAY,
                    },
                  }}
                />
                <VictoryLine
                  style={{
                    data: {
                      stroke: COLORS.SECONDARY,
                    },
                    parent: {
                      border: '1px solid #ccc',
                    },
                    labels: {
                      fontSize: 30,
                    },
                  }}
                  data={selectedCurrency?.chartData}
                  categories={{
                    x: ['15 min', '30 min', '45 min', '60 min'],
                    y: ['0   ', '15 ', '30 ', '45 '],
                  }}
                />
                <VictoryScatter
                  data={selectedCurrency?.chartData}
                  size={6}
                  style={{
                    data: {
                      fill: COLORS.SECONDARY,
                    },
                  }}
                />
              </VictoryChart>
            </View>
          </View>
          <View
            style={{
              ...styles.chartContainer,
              ...SHADOW,
              ...{marginHorizontal: 8, marginVertical: 12},
            }}>
            <Text style={{...FONTS_title, ...{marginVertical: 12}}}>
              Description
            </Text>
            <Text style={FONTS_body}>{selectedCurrency?.description}</Text>
          </View>
          <View style={styles.buttonWrap}>
            <CustomButton
              title={`Sell ${selectedCurrency?.code}`}
              bgrColor={COLORS.PRIMARY}
              textColor={COLORS.WHITE}
              width={'40%'}
              onPress={() => {
                handleModal();
                handleModalNameSell();
              }}
            />
            <CustomButton
              title={`Buy ${selectedCurrency?.code}`}
              bgrColor={COLORS.LIGHT_GRAY}
              textColor={COLORS.BLACK}
              width={'40%'}
              onPress={() => {
                handleModal();
                handleModalNameBuy();
              }}
            />
          </View>
          <ModalBuySell
            isModalVisible={isModalVisible}
            selectedCurrency={selectedCurrency}
            modalName={modalName}
            onClose={handleModal}
          />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.wrap}>
      <HeaderBar right={true} />

      <ScrollView style={styles.chartWrap}>
        <View style={{marginHorizontal: 12, marginBottom: 16, marginTop: 4}}>
          {renderChart()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  chartWrap: {
    marginVertical: 12,
  },
  chartContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
  },
  buttonWrap: {
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
