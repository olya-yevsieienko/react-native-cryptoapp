import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {FONTS_body, FONTS_title} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {Currensy} from '../type/Curreny';
import {CustomButton} from './CustomButton';

type Props = {
  isModalVisible: boolean;
  selectedCurrency: Currensy;
  modalName: string;
  onClose: () => void;
};

export const ModalBuySell: React.FC<Props> = ({
  isModalVisible,
  selectedCurrency,
  modalName,
  onClose,
}) => {
  const [currencyBuy, setCurrencyBuy] = useState('');
  const [currencySell, setCurrencySell] = useState('');

  const getCurrencyAmount = (currency: Currensy) => {
    let currencyAmount;

    if (currency !== null && currency.amount !== null) {
      currencyAmount = currency.amount.match(/\d/g).join('');
    }

    return currencyAmount;
  };

  const selectedCurrencyAmount = getCurrencyAmount(selectedCurrency);

  const currencyAmountInOneUsdt = (1 / +selectedCurrencyAmount).toFixed(8);

  useEffect(() => {
    let currencyInputValue;

    if (modalName === 'Buy') {
      currencyInputValue = +currencyBuy * +currencyAmountInOneUsdt;
      setCurrencySell(currencyInputValue.toFixed(8));
    } else {
      currencyInputValue = +currencySell * +selectedCurrencyAmount;
      setCurrencyBuy(currencyInputValue.toString());
    }
  }, [
    currencyAmountInOneUsdt,
    currencyBuy,
    currencySell,
    modalName,
    selectedCurrencyAmount,
  ]);

  const handleExchange = () => {
    setCurrencyBuy('');
    setCurrencySell('');
  };

  function renderModalBuy() {
    return (
      <View>
        <TextInput
          style={{...styles.input, ...FONTS_body}}
          keyboardType="number-pad"
          placeholder={'0.0000'}
          onChangeText={setCurrencyBuy}
          value={currencyBuy}
        />
        <View style={styles.wrap}>
          <Text style={FONTS_body}>
            {`1 USDT = ${currencyAmountInOneUsdt} ${selectedCurrency?.code}`}
          </Text>
          <CustomButton
            title={'Switch'}
            bgrColor={COLORS.LIGHT_GRAY}
            textColor={''}
            width={'24%'}
            onPress={() => console.log('switch')}
          />
        </View>
        <TextInput
          style={{...styles.input, ...FONTS_body}}
          keyboardType="number-pad"
          placeholder={'0.0000'}
          onChangeText={setCurrencySell}
          value={currencySell}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
    );
  }

  function renderModalSell() {
    return (
      <View>
        <TextInput
          style={{...styles.input, ...FONTS_body}}
          keyboardType="number-pad"
          placeholder={'0.0000'}
          onChangeText={setCurrencySell}
          value={currencySell}
        />
        <View style={styles.wrap}>
          <Text style={FONTS_body}>
            {`1 ${selectedCurrency?.code} = ${selectedCurrency?.amount} USDT`}
          </Text>
          <CustomButton
            title={'Switch'}
            bgrColor={COLORS.LIGHT_GRAY}
            textColor={''}
            width={'24%'}
            onPress={() => console.log('switch')}
          />
        </View>
        <TextInput
          style={{...styles.input, ...FONTS_body}}
          placeholder={'0.0000'}
          onChangeText={setCurrencyBuy}
          value={currencyBuy}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
    );
  }

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.containerModal}>
        <View style={{...styles.wrap, ...{marginBottom: 12}}}>
          <Text style={FONTS_title}>{modalName}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={FONTS_title}>X</Text>
          </TouchableOpacity>
        </View>
        {modalName === 'Buy' ? renderModalBuy() : renderModalSell()}
        <View style={styles.wrapButtons}>
          <CustomButton
            title={'Exchange'}
            bgrColor={COLORS.YELLOW}
            textColor={COLORS.BLACK}
            width={'60%'}
            onPress={handleExchange}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 24,
  },
  wrapButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  switchButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 12,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 20,
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 20,
  },
});
