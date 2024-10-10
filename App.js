import React from  'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/capa-card.png';
import Foto from './assets/foto-dev.png';

export default function CardPerfil() {
  return (
    <View style={estilos.container}>
      <Image
        source={Capa}
        style={{ width: 390, height: 480, marginTop: -90, marginBottom: 10 }} /> 
      <Image
        source={Foto}
        style={estilos.img}
      />
      <Text style={estilos.titulo}>Dileno Tavares</Text>
      <Text style={estilos.descricao}>Desenvolvedor Web Full Stack. Tecnólogo em análise e Desenvolvimento de Sistemas. Conhecimento em Php, javascript, Python, Java, Spring Boot, PostgreSQL e MySQL.  
.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 180,
    height: 180,
    margin: 5,
    borderRadius: 90,
  },
  titulo: {
    fontSize: 22,
    marginTop: 5,
    marginBottom: 5,
  },
  descricao: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});
