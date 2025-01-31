import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Importar DATA desde Data.ts
import DATA from '@/data/Data'; // Ajusta la ruta según tu estructura de carpetas

// Definir las props del componente Card
interface CardProps {
  title: string;
  description: string;
  image: any; // Usamos `any` para las imágenes
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push('/two')}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card {...item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});