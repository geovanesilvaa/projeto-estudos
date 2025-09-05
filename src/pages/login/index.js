import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, React Native! 🚀</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
