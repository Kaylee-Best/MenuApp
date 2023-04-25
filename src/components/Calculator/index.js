import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CheckoutCalculator = () => {
  const [subtotal, setSubtotal] = useState('');
  const [discount, setDiscount] = useState('');
  const [total, setTotal] = useState('');

  const calculateTotal = () => {
    // Perform calculation based on input
    const parsedSubtotal = parseFloat(subtotal);
    const parsedDiscount = parseFloat(discount);
    const calculatedTotal = parsedSubtotal - parsedDiscount;
    setTotal(calculatedTotal.toFixed(2)); // round to 2 decimal places
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Subtotal:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={subtotal}
        onChangeText={setSubtotal}
      />
      <Text style={styles.label}>Discount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <Button title="Calculate Total" onPress={calculateTotal} />
      <Text style={styles.label}>Total: ${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default CheckoutCalculator;
