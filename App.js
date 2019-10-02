/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <Text style={styles.text}>View</Text>
        <View style={styles.round} />
        <Text style={styles.text}>Image</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/5/58/Ponto_Amarelo.png',
          }}
        />
        <Text style={styles.text}>View inside Text</Text>
        <Text>
          <View style={styles.round} />
        </Text>
        <Text style={styles.text}>Image inside Text</Text>
        <Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/5/58/Ponto_Amarelo.png',
            }}
          />
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  round: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default App;
