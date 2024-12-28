import { Stack } from 'expo-router';
import { Fragment } from 'react';
import { View, Text } from 'react-native';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <View>
          <Text>Drawer Home ...</Text>
        </View>
        <ScreenContent path="app/(drawer)/index.tsx" title="Home" />
      </Container>
    </Fragment>
  );
}
