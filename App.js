import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './src/navigators/AuthenticationStack';
import SplashScreen from './src/containers/splashscreen/splashscreen/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#22343C" barStyle="light-content" />
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthenticationStack />
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

export default App;
