import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    productItem: {
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 15,
      borderRadius: 8,
      elevation: 3, // Sombras no Android
    },
    productImage: {
      width: '100%',
      height: 150,
      borderRadius: 8,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    productCategory: {
      fontSize: 14,
      color: '#888',
    },
    productDescription: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#d9534f',
      marginTop: 10,
    },
  });
  

export default styles

