import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Testimonio({ nombre, país, cargo, empresa, foto, testimonio }) {
  return (
    <View style={styles.testimonioContainer}>
    
      <View style={styles.imageContainer}>
        <Image source={foto} style={styles.image} />
      </View>
    
      <View style={styles.textContainer}>
        <Text style={styles.nombre}>{nombre} en {país}</Text>
        <Text style={styles.cargo}>{cargo} en {empresa}</Text>
        <Text style={styles.testimonio}>{testimonio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testimonioContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 250,
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  imageContainer: {
    flex: 1.2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100, // 
    width: 100, // 
    borderRadius: 50, 
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cargo: {
    fontSize: 16,
    marginVertical: 5,
  },
  testimonio: {
    fontSize: 14,
    fontStyle: 'normal',
    justifyContent: 'center',
    textAlign:'justify',
  },
});
