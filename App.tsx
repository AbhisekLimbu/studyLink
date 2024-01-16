import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const HomePage = () => {
  const handleSignUpPress = () => {
    // Handle sign up button press action
    console.log('Sign Up button pressed!');
    // Add your sign-up logic here
  };

  return (
    <ImageBackground
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Study Chamber</Text>
        <Text style={styles.descriptionText}>
          Connect, collaborate, conquer – where students unite by major for shared success.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    backgroundColor: '#4CAF50', // Green background color
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff', // White text color
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff', // White text color
  },
  button: {
    backgroundColor: '#3498db', // Blue background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White text color
  },
});

export default HomePage;
