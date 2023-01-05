import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {FONTS_body, FONTS_title, STYLE_app_container} from '../styles/styles';
import {COLORS} from '../styles/theme';
import {UserSettings} from './UserSettings';

export const Profile = () => {
  const [userName, setUserName] = useState('User198459');
  const navigation = useNavigation();

  const handleChangeUserName = ({name}) => {
    setUserName(name);
  };

  return (
    <ScrollView>
      <View style={STYLE_app_container}>
        <View style={styles.userWrap}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserSettings', {
                name: userName,
                onChangeName: handleChangeUserName,
              })
            }>
            <Image
              source={require('../images/user.png')}
              style={styles.userImage}
            />
          </TouchableOpacity>
          <Text style={FONTS_title}>{`Hi, ${userName}`}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../icons/settings.png')}
                style={styles.icon}
              />
              <Text style={FONTS_body}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../icons/help.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={FONTS_body}>Help Center</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../icons/settings.png')}
                style={styles.icon}
              />
              <Text style={FONTS_body}>About Us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userImage: {
    marginTop: 20,
    marginBottom: 16,
    width: 184,
    height: 184,
  },
  userWrap: {
    marginBottom: 24,
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
    width: 30,
    height: 30,
    tintColor: COLORS.BLACK,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
  },
});
