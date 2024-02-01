import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Mostrar mensaje de bienvenida al cargar la pantalla
    showAlert();
  }, []);

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  const showAlert = () => {
    Alert.alert(
      '¡Bienvenido!',
      'Gracias por usar nuestra aplicación de compras. Explora las últimas ofertas y descuentos exclusivos.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="bars" size={20} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/70/09/b2/7009b214a0a9c8ee35f5ef70b895eb02.jpg' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.rightIcons}>
          <View style={styles.notificationIconContainer}>
            <TouchableOpacity style={styles.notificationIcon}>
              <Icon name="bell" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.cartIconContainer}>
            <TouchableOpacity style={styles.cartIcon}>
              <Icon name="shopping-cart" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos..."
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/c7/c8/cb/c7c8cbdad3db437ed2407b335fa7c95b.jpg' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <Text style={styles.promotionText}>¡Descuento del 20%! Aprovecha esta oferta especial.</Text>

        <Image
          source={{ uri: 'https://i.pinimg.com/564x/81/e1/fd/81e1fde8db520bcd10b987d9584de7d8.jpg' }}
          style={styles.galleryImage}
          resizeMode="cover"
        />
        <Text style={styles.promotionText}>¡Nuevas llegadas! Descubre lo último en moda fitness.</Text>

        <Image
          source={{ uri: 'https://i.pinimg.com/564x/c8/43/a2/c843a26f03227a8c63e30ceebf7a9079.jpg' }}
          style={styles.galleryImage}
          resizeMode="cover"
        />
        <Text style={styles.promotionText}>¡Compra dos y llévate uno gratis! Oferta limitada.</Text>

        <Image
          source={{ uri: 'https://i.pinimg.com/564x/86/6b/ca/866bcaac2ee5bfbeb7bb0ca6eca4ea2d.jpg' }}
          style={styles.galleryImage}
          resizeMode="cover"
        />
        <Text style={styles.promotionText}>¡Envío gratuito en todas tus compras este mes!</Text>

        <Image
          source={{ uri: 'https://i.pinimg.com/564x/7c/0e/bf/7c0ebfda29b27f93ec9a5df6ce3adde9.jpg' }}
          style={styles.galleryImage}
          resizeMode="cover"
        />
        <Text style={styles.promotionText}>¡Compra ahora y recibe un regalo sorpresa!</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  logo: {
    height: 40,
    width: 120,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    height: 40,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  notificationIconContainer: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
    marginRight: 10,
  },
  notificationIcon: {
    paddingHorizontal: 5,
  },
  cartIconContainer: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
  },
  cartIcon: {
    paddingHorizontal: 5,
  },
  scrollView: {
    flex: 1,
  },
  bannerImage: {
    height: 200,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  galleryImage: {
    height: 200,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  promotionText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
