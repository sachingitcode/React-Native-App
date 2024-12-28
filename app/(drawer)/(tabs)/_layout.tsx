import { Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Button, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import { useState } from 'react';

const headerLogo = require('~/assets/s_tiny_logo1.png');

const LogoTitle = () => {
  return (
    <Pressable
      onPress={() => {
        console.log('Hello');
      }}>
      <Image style={styles.image} source={headerLogo} />
    </Pressable>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'yellow',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />{' '}
      {/*  */}
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />{' '}
      {/*  */}
      {/*  */}
      <Tabs.Screen
        name="homescreen"
        options={{
          headerShown: true,
          title: 'Wallet',
          //   headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" />,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'wallet' : 'wallet-outline'} color={color} size={24} />
          ),
        }}
      />{' '}
      {/*  */}
      {/*  */}
      <Tabs.Screen
        name="imageupload"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      {/*  */}
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={24} />
          ),
        }}
      />
      {/*  */}
    </Tabs>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
