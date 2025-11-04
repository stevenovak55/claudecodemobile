import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Simple test version - bypasses navigation
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✅ Mobile App Framework Loaded!</Text>
      <Text style={styles.subtext}>If you see this, the app is working.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default App;
