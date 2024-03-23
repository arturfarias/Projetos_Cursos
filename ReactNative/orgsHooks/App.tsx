import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/telas/Home';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
     <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
