import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonio from './Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

        <Image source={require('./assets/Imagenes/logo_free.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>

      <ScrollView style={styles.scrollView}>
      <Testimonio
          nombre="Brayan Melgara"
          país="Japon"
          cargo="Ingeniero de Software"
          empresa="Agencia Eve"
          foto={require('./assets/Imagenes/Brayan.jpeg')}
          testimonio="Este conocimiento no solo me dio nuevas habilidades, sino también la confianza para colaborar con Eve en su próximo álbum, integrando tecnologías innovadoras en su música y llevando su sonido a nuevas alturas."
        />
        <Testimonio
          nombre="Shawn Wang"
          país="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require('./assets/Imagenes/Shawn.png')}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida"
        />
        <Testimonio
          nombre="Sarah Chima"
          país="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          foto={require('./assets/Imagenes/Sarah.png')}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble"
        />
        <Testimonio
          nombre="Emma Bostian"
          país="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          foto={require('./assets/Imagenes/Emma.png')}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    backgroundColor: '#0a0a23', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollView: {
    width: '100%',
  },
});
