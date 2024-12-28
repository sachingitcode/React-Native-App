import { Redirect, Link } from 'expo-router';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const backG = require('~/assets/splash1.png');

export default function AboutScreen() {
  const onPressButton = () => {
    <Redirect href="./(auth)/sign-in" />;
    alert('yoo');
  };

  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={backG} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to MultiPurpose App</Text>
        <Text style={styles.subtitle}>Your all-in-one solution</Text>

        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        <Link style={styles.button} href="./auth)/sign-in">
          Login Screen!
        </Link>

        <Link style={styles.button} href="./(tabs)">
          Home Screen!
        </Link>
        <Button title="Press Me" onPress={() => onPressButton} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },

  button_1: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    borderRadius: 1,
    borderBlockColor: 'red',
    borderBottomColor: 'green',
    borderColor: 'yellow',
  },

  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    padding: 15,
    margin: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
