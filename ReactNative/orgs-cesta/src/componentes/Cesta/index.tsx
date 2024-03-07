import { Image, View, StyleSheet, Dimensions } from 'react-native';
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import {ICesta} from '../../interfaces/ICesta'

const Cesta: React.FC<ICesta> = ({topo, detalhes}) => {
  return (
    <View>
      <Topo {...topo} />
      <View style={styles.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;