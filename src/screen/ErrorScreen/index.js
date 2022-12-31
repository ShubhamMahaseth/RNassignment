import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const ErrorScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.container}>Data Posting Failed </Text>
    </View>
  );
};

export default ErrorScreen;
