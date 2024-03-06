import { StatusBar, View } from 'react-native';
import Cesta from './src/componentes/Cesta'
import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import {Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
      useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Montserrat-Bold': Montserrat_700Bold,
            'Montserrat-Regular': Montserrat_400Regular,
          });
        }
    
        loadFonts();
      }, []);

  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}
