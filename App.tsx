import React from 'react';
import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/screens/CounterScreen';

// import {PositionScreen} from './src/screens/PositionScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {FlexScreen} from './src/screens/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CounterScreen />
    </SafeAreaView>
  );
};
