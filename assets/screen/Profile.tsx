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
import {FONTS_body_1, FONTS_title, SHADOW} from '../styles/styles';
import {COLORS} from '../styles/theme';

export const Profile = () => {
  const [userName, setUserName] = useState('User198459');
  const navigation = useNavigation();

  const handleChangeUserName = (name: string): void => {
    setUserName(name);
  };

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={{...styles.userWrap, ...SHADOW}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserSettings', {
                userName: userName,
                onChangeName: handleChangeUserName,
              })
            }>
            <Image
              source={require('../images/user.png')}
              style={styles.userImage}
            />
            <View style={styles.container}>
              <Text style={FONTS_title}>{`Hi, ${userName}`}</Text>
              <Image
                source={require('../icons/right.png')}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../icons/settings.png')}
                style={styles.icon}
              />
              <Text style={FONTS_body_1}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../icons/help.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={FONTS_body_1}>Help Center</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../icons/about.png')}
                style={styles.icon}
              />
              <Text style={FONTS_body_1}>About Us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  userWrap: {
    marginBottom: 10,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
  userImage: {
    width: 184,
    height: 184,
  },
  icon: {
    marginRight: 8,
    width: 30,
    height: 30,
    tintColor: COLORS.BLACK,
  },
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
});
