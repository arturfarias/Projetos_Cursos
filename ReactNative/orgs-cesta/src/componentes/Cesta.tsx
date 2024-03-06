import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const height = Dimensions.get('screen').height;

const Cesta: React.FC = () => {
  return (
    <View>
      <Image source={topo} style={styles.topo} />
      <Text  style={styles.titulo}>Detalhe da cesta</Text>
      
      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verdura</Text>
        <View style={styles.fazenda}>
          <Image source={logo} style={styles.imagemFazenda} />
          <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
        <Text style={styles.preco}>40,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: height / 3,
  },

  titulo:{
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },

  cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome:{
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "Montserrat-Bold",
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
    fontFamily: "Montserrat-Regular",
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

export default Cesta;