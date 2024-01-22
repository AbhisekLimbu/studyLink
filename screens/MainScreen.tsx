import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignUpScreen  from './screens/SingUpScreen'; // Corrected import
import { 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';

const HomePage = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  //const handleCreateAccountPress = () => {
    // Handle create account button press action
    //console.log('Create an Account button pressed!');
    // Add your create account logic here
  //};

  return (
    <ImageBackground
      source={require('./assets/pictureOne.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Study Chamber</Text>
        <Text style={styles.descriptionText}>
          Connect, collaborate, conquer
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}  // Use the same style as the "Sign Up" button
          //onPress={handleCreateAccountPress}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#4CAF50',
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
    color: 'green',
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: 'green',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomePage;
