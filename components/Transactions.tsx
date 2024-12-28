import React, { useCallback, useRef, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import TransactionItem from "./TransactionItem";
const Transactions = ({}) => {
  // Example transaction data
  const [sampleData, setSampleData] = useState([
    { id: "1", date: "9/12/24", name: "Sent to Soknal", amount: "-3.01" },
    { id: "2", date: "8/12/24", name: "Received from Alice", amount: "+50.00" },
    { id: "3", date: "7/12/24", name: "Paid for dinner", amount: "-12.00" },
    { id: "4", date: "6/12/24", name: "Transfer from Bank", amount: "+100.00" },
    { id: "5", date: "9/12/24", name: "Received to Soknal", amount: "-13.01" },
    { id: "6", date: "8/12/24", name: "Transfer from Alice", amount: "+50.30" },
    { id: "7", date: "7/12/24", name: "Received for dinner", amount: "-12.30" },
    { id: "8", date: "6/12/24", name: "Send to Bank", amount: "+10.00" },
    { id: "8", date: "8/12/24", name: "Transfer to Ali", amount: "+50.30" },
    { id: "10", date: "7/12/24", name: "Received for Sam", amount: "-12.30" },
    { id: "11", date: "6/12/24", name: "Send to Job", amount: "+10.00" },
    { id: "12", date: "1/12/24", name: "Received for Om", amount: "-12.30" },
    { id: "13", date: "16/12/24", name: "Send to Mao", amount: "+10.00" },
  ]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["35%", "90%"];
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  function outsidePress() {}

  function handleItemPress(id: any) {
    console.log("Item is Pressed: " + String(id));
  }

  const handleOutsidePress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0); // Reduce to 25%
  }, []);
  const handleSheetChange = ({ item }: any) => {
    console.log("handleSheetChange :: ", item);
  };
  const handleListPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1); // Expand to 90%
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderItem = useCallback(
    ({ item }: any) => (
      <Pressable onPress={handleListPress} style={styles.listItem}>
        {/* key={item}> */}
        <TransactionItem
          date={item.date}
          name={item.name}
          amount={item.amount}
          id={item.id}
          onItemPress={() => handleItemPress(item.id)}
        />
      </Pressable>
    ),
    []
  );

  return (
    <>
      <Pressable style={StyleSheet.absoluteFill} onPress={handleOutsidePress}>
        <Text style={styles.text}>Tap outside the list to collapse</Text>
      </Pressable>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        onChange={(index) => console.log("Sheet index changed to:", index)}
        style={styles.bottomsheet}
      >
        <BottomSheetFlatList
          data={sampleData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  bottomsheet: {
    borderCurve: "circular",
    borderWidth: 0.5,
    borderRadius: 10,
    borderBlockColor: "grey",
  },
});

export default Transactions;
