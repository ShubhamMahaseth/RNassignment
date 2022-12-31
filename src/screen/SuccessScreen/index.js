import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const SuccessScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.container}> Data Posted successfully </Text>
    </View>
  );
};

export default SuccessScreen;
