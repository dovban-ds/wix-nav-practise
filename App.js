/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const App = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="SETTING UP!"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Settings',
              },
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 35,
    marginBottom: 15,
    fontWeight: '600',
  },
});

export default App;
