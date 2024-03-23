import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';

import {carregaTopo} from '../../../servicos/carregaDados';
import logo from '../../../assets/logo.png';

interface TopoData {
  boasVindas: string;
  legenda: string;
}

const Topo: React.FC = () => {
  const [topoData, setTopoData] = useState<TopoData>({ boasVindas: '', legenda: '' });

  useEffect(() => {
    async function carregarDados() {
        const dados = await carregaTopo();
        setTopoData(dados);
    }
  }, []);

  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.image} />
        <Text style={styles.boasVindas} >{topoData.boasVindas}</Text>
        <Text style={styles.legenda}>{topoData.legenda}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topo:{
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image:{
    width: 70,
    height: 28,
  },
  boasVindas:{
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda:{
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;