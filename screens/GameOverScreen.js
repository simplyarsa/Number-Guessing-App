import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// import { View } from 'react-native-web'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
  return (
    <View style={styles.rootContainer} >
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/success.png')}/>
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles=StyleSheet.create({
  rootContainer:{
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'white',
    overflow: 'hidden',
    margin: 36,
  },
  image:{
    width: '100%',
    height: '100%',
  },
  summaryText:{
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText:{
    fontFamily: 'open-sans-bold',
    color: 'red',
  }
})