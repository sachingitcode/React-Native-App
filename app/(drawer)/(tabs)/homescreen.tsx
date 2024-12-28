import React, { useState, useCallback, useRef, useMemo } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  Modal,
  ScrollView,
  LayoutChangeEvent,
  Pressable,
} from 'react-native';
import AccountCard from '~/components/AccountCard';
import ActionButtons from '~/components/ActionButtons';
// import TransactionItem from "@/app/components/TransactionItem";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
// import App1 from "./testing";
import Transactions from '~/components/Transactions';

const HomeScreen = () => {
  const handleOutsidePress = useCallback(() => {
    this.bottomSheetRef.current?.snapToIndex(0); // Reduce to 25%
  }, []);

  const BeachImage = require('~/assets/beach.jpg');
  const TempleImage = require('~/assets/temple.jpeg');
  const backgroundImage = require('~/assets/bkgrnd3.avif');

  const [slideHeight, setSlideHeight] = useState(0);

  const updateHeight = () => (e: LayoutChangeEvent) => {
    setSlideHeight(e.nativeEvent.layout.height);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <GestureHandlerRootView style={styles.sheet_container}>
          <Pressable style={StyleSheet.absoluteFill} onPress={handleOutsidePress}>
            <AccountCard type="Riel" balance="៛25000.10" imgSource={BeachImage} />
            <AccountCard type="Dollar" balance="$1900.84" imgSource={TempleImage} />
            <ActionButtons />
          </Pressable>

          <Transactions />

          {/* <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            onChange={(index) => console.log("Sheet index changed to:", index)}
            style={styles.bottomsheet}
          >
            <Text style={styles.sectionTitle}> Transactions</Text>
            <BottomSheetFlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.listContainer}
            />
          </BottomSheet> */}
        </GestureHandlerRootView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  listContent: {
    paddingBottom: 16,
  },
  slide2: {
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  sheet_container: {
    flex: 1,
    backgroundColor: '#f0faf9',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  bottomsheet: {
    borderCurve: 'circular',
    borderWidth: 0.5,
    borderRadius: 10,
    borderBlockColor: 'grey',
  },
});

export default HomeScreen;

{
  /* <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
          onLayout={updateHeight}
        >
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
        </ScrollView>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              date={item.date}
              name={item.name}
              amount={item.amount}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={true}
        /> */
}
{
  /* <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              date={item.date}
              name={item.name}
              amount={item.amount}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        /> */
}
