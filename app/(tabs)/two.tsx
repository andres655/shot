import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DATA  from '@/data/Data';  // Importa DATA desde el archivo Data.ts

export default function TwoScreen() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < DATA.length - 1) setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={DATA[index].image} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{DATA[index].title}</Text>
        <Text style={styles.description}>{DATA[index].description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.prev]} onPress={handlePrevious} disabled={index === 0}>
            <Text style={[styles.buttonText, index === 0 && styles.disabledText]}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.next]} onPress={handleNext} disabled={index === DATA.length - 1}>
            <Text style={[styles.buttonText, index === DATA.length - 1 && styles.disabledText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  card: {
    backgroundColor: '#FAF6FF',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    marginTop: -30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#5E5E5E',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  prev: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#5E3B76',
  },
  next: {
    backgroundColor: '#5E3B76',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#BDBDBD',
  },
});
