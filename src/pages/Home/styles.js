import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela toda
    backgroundColor: "#f5f5f5",
    alignItems: "center", // centraliza horizontalmente
    justifyContent: "center", // centraliza verticalmente
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
