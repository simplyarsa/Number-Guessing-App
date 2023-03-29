import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds]=useState(0)

  const [fontsLoaded] =useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameOver(true)
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={startNewGameHandler} />
  }

  

  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <StartGameScreen /> */}
        <SafeAreaView style={styles.rootScreen} >
        {/* <GameOverScreen /> */}
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.15
  }
});
