import { Image, View, StyleSheet } from 'react-native';
import Texto from '../../Texto'
import {IDetalhes} from '../../../interfaces/ICesta'

const Detalhes: React.FC<IDetalhes> = ({nome, logo, nomeFazenda, descricao, preco}) => {
  return (
    <>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
          <Image source={logo} style={styles.imagemFazenda} />
          <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
    </>
  );
};

const styles = StyleSheet.create({
  nome:{
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },

  fazenda:{
    flexDirection: "row",
    paddingVertical: 12,
  },

  imagemFazenda:{
    width: 32,
    height: 32,
  },

  nomeFazenda:{
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao:{
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco:{
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default Detalhes;