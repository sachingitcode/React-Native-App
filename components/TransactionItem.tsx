import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  date: string;
  name: string;
  amount: string;
  id: string;
  onItemPress: () => any;
};

const TransactionItem = ({ date, name, amount, id, onItemPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onItemPress} key={id}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    color: "#e74c3c",
  },
});

export default TransactionItem;
