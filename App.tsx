import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import styles from './style/app';

// URL da API com os produtos
const API_URL = 'https://kumbo.onrender.com/api/products';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os produtos da API
  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json(); // Converte a resposta para JSON
      setProducts(data); // Armazena os dados no estado
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false); // Para o indicador de carregamento
    }
  };

  // Chama fetchProducts quando o componente é montado
  useEffect(() => {
    fetchProducts();
  }, []);

  // Exibe o indicador de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.urlImage }} style={styles.productImage} />
            <Text style={styles.productName}>{item.nome}</Text>
            <Text style={styles.productCategory}>Categoria: {item.categoria}</Text>
            <Text style={styles.productDescription}>{item.descricao}</Text>
            <Text style={styles.productPrice}>Preço: R$ {item.preco}</Text>
          </View>
        )}
      />
    </View>
  );
}
