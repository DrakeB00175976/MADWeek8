import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function BmiScreen() {
  //TODO set all you constants here
  const [weightInput, setWeightInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBmi = () => {
    //TODO calculation code goes here
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);
    if (isNaN(weight) || isNaN(height) || height === 0) {
      alert("Please enter valid weight and height");
      return;
    }
    const bmi = weight / (height * height);
    setBmiResult(bmi.toFixed(2));
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";
    setBmiCategory(category);  //bmiCategory = category;
    
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <Text style={styles.label}>Enter your Weight (kg):</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={weightInput} onChangeText={setWeightInput} />
        <Text style={styles.label}>Enter your Height (m):</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={heightInput} onChangeText={setHeightInput} />
        <Button title="Calculate BMI" onPress={calculateBmi} />
          <Text style={styles.resultText}>BMI: {bmiResult} </Text>
          <Text style={styles.categoryText}>Category: {bmiCategory} </Text>
        
     </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 16, marginVertical: 6 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 4 },
  resultContainer: { marginTop: 25, padding: 15, backgroundColor: "#f0f4f8", borderRadius: 6, alignItems: "center" },
  resultText: { fontSize: 20, fontWeight: "bold", color: "#333" },
  categoryText: { fontSize: 16, color: "#555", marginTop: 5 }
});