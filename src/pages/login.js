import React, { useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import CustomButton from '../components/customButton'
import CustomInput from '../components/customInput'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        onChange={setUsername}
        style={styles.input}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChange={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <CustomButton  text="Login" onPress={handleLogin} />
      <CustomButton type="TERTIARY" text="Register" onPress={goToRegister} />
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

export default Login;
