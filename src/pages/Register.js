import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import CustomButton from '../components/customButton'
import CustomInput from '../components/customInput'

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  const goBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        onChange={setUsername}
        style={styles.input}
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChange={setEmail}
        style={styles.input}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChange={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <CustomInput
        placeholder="Repeat Password"
        value={repeatPassword}
        onChange={setRepeatPassword}
        secureTextEntry
        style={styles.input}
      />
      <CustomButton text="Register" onPress={handleRegister} />
      <CustomButton type="TERTIARY" text="Back to Login" onPress={goBackToLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B0DEF2',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  text : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Register;
