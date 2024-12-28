import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { theme } from '../theme';
import {
  Button,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
// import { tokenCache } from '@/cache'; /
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';

//  delay hiding the splash screen for five seconds
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#33ccff  ',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />

          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, headerTitle: 'Global Header' }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* <StatusBar style="light" /> */}
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  intilise: { alignItems: 'center', justifyContent: 'center', flex: 1 },
});
