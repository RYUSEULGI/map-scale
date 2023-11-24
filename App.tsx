/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigations';

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

export default App;
