// RegistroScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Dimensions, Alert, KeyboardAvoidingView, Platform } from 'react-native';  // Añadido 'Platform'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegistroScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegistro = () => {
    // Validar que los campos no estén vacíos
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Validar el formato del correo electrónico 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Ingrese un correo electrónico válido');
      return;
    }

    // Lógica para manejar el registro
    // Puedes enviar estos datos a tu servidor o base de datos
    console.log('Datos de registro:', {
      firstName,
      lastName,
      email,
      password,
    });

    // Navegar a la pantalla de inicio de sesión después del registro
    navigation.navigate('Login');

    // Muestra un mensaje de alerta después del registro exitoso
    Alert.alert('Éxito', 'El registro fue exitoso');
  };

  const handleIrALogin = () => {
    // Navegar a la pantalla de inicio de sesión
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/70/09/b2/7009b214a0a9c8ee35f5ef70b895eb02.jpg' }}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            placeholder="Nombres"
            placeholderTextColor="white"
            style={styles.input}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            placeholder="Apellidos"
            placeholderTextColor="white"
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>

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

        <TouchableOpacity style={styles.registroButton} onPress={handleRegistro}>
          <Text style={styles.registroButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleIrALogin}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta? Inicia sesión</Text>
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
  registroButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  registroButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
});

export default RegistroScreen;
