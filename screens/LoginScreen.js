import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleLogin = () => {
    const isAuthenticationSuccessful = email === 'luis@gmail.com' && password === 'luis1234';

    if (isAuthenticationSuccessful) {
      console.log('Autenticación exitosa!');
      // Navegar a la pantalla de inicio (Home)
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Credenciales incorrectas',
        'Por favor, verifica tu correo electrónico y contraseña.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  };

  const handleSignUp = () => {
    // Navegar a la pantalla de registro (RegistroScreen)
    navigation.navigate('Registro');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/bd/4a/43/bd4a439ebd65ff1146e53bcf40402b5f.jpg' }}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="white" style={styles.icon} />
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="white"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="white" style={styles.icon} />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupText}>No tienes una cuenta? SignUp</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: windowWidth - 40,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  forgotPasswordText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  signupText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
});


export default LoginScreen;
