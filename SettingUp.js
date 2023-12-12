import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const SettingUp = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Setting up!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 35,
    marginBottom: 15,
    fontWeight: '600',
  },
});

export default SettingUp;
