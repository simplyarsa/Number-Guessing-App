import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title'
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from '../components/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary=1;
  let maxBoundary=100;


const GameScreen = ({userNumber, onGameOver}) => {

    const initiaGuess=generateRandomBetween(1,100, userNumber);
    const [currentGuess, setCurrentGuess]=useState(initiaGuess);
    const [guessRounds, setGuessRounds]=useState([initiaGuess])

    useEffect(()=>{
        if(currentGuess===userNumber ){
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver]);

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    }, [])

    function guessHandler(direction){ //direction=>'lower', 'greater'

        if(direction==='lower' && currentGuess<userNumber || direction==='greater' && currentGuess>userNumber){
            Alert.alert(`Don't lie`, 'You know that this is wrong...', [{text: 'Sorry!', style:'cancel'}])
            return
        }

        if(direction==='lower'){
            maxBoundary=currentGuess;
        }
        else{
            minBoundary=currentGuess+1;
        }
        const newRndNumber=generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prev)=>[newRndNumber,  ...prev ])
    }
    
    const guessRoundListLength=guessRounds.length;

  return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
    <NumberContainer>{currentGuess}</NumberContainer>
        <Text>Higher or lower?</Text>
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={guessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color="white" /></PrimaryButton></View>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={guessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color="white" /></PrimaryButton>
        </View>
    </View>
        <View style={styles.listContainer}>
          {/* {guessRounds.map(guessRound=><Text key={guessRound}>{guessRound}</Text>)} */}
          <FlatList 
          data={guessRounds} 
          renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundListLength-itemData.index} guess={itemData.item} />}
          keyExtractor={(item)=>item}
          /> 
        </View>
    </View>
  )
}

export default GameScreen

const styles=StyleSheet.create({
    screen: {
        flex:1,
        padding: 40
    },
    instructionText:{
      marginBottom: 12,
    },
    buttonsContainer:{
      flexDirection: 'row',
    },
    buttonContainer:{
      flex: 1,
    },
    listContainer:{
      flex: 1,
      padding: 16,
    }
})