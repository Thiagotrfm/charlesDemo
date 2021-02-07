import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Quote from './src/scenes/quote';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Quote />
      </SafeAreaView>
    </>
  );
};

export default App;
