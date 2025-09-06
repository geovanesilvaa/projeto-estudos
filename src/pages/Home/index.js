import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
