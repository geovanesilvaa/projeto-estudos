import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Dshboard</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
