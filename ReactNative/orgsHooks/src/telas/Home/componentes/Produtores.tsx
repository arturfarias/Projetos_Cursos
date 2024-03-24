import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ListRenderItem } from 'react-native';

import { carregaProdutores } from '../../../servicos/carregaDados';

interface ILista {
    nome: string,
    imagem: any,
    distancia: string,
    estrelas: number,
}

interface Props  {
    topo: React.FC,  
};


const Produtores: React.FC<Props> = ({topo: Topo}) => {
    const [titulo, setTitulo] = useState<string>('');
    const [lista, setLista] = useState<ILista[]>([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]);

    const TopoLista: ListRenderItem<{}> = () => {
        return (<>
          <Topo />
          <Text style={styles.titulo}>{ titulo }</Text>
          </>
        );
    };
      
  return (
    <FlatList 
       data={lista}
       renderItem={({item: {nome}}: {item: ILista}) => <Text>{nome}</Text>}
       ListHeaderComponent={TopoLista} 
       keyExtractor={({nome}) => nome} />
  );
};

const styles = StyleSheet.create({
    titulo:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
});

export default Produtores;