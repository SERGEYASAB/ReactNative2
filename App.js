import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button,Image,Headers } from 'react-native';
//import { LoginButton, AccessToken } from 'react-native-fbsdk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component/*<Props>*/ {
  render() {
    return (
      <View style={styles.container}>
        <Headers>
          <Image
            style={{ width: 320, height: 200 }}
            source={require('images/header.png')} />
        </Headers>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button style={styles.button1}
          title="Login"
        />
        <Button style={styles.button2}
          title="SIGN UP" />
        <Image
          style={{ width: 50, height: 50 }}
          source={require('images/facebook.png')}
          onPress={login()} />
        <Image
          style={{ width: 50, height: 50 }}
          source={require('images/twitter.png')} />
        <Image
          style={{ width: 50, height: 50 }}
          source={require('images/instagram.png')} />
        <Button
          title="NO LOGIN" />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 400,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: "#D91071",
    marginBottom: 20
  },
  button1: {
    backgroundColor: "#D91071",
    width: 200
  },
  button2: {
    backgroundColor: "white",
    width: 200
  }
});
