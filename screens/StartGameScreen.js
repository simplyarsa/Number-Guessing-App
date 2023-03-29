import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from '../components/Title';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function inputHandler(enteredText){
    setEnteredNumber(enteredText)
  }

  function confirmInputHandler(){
    const chosenNumber=parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber >99){
      Alert.alert('Invalid Number!',
      'Number has to be a number between 1 and 99',
      [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return
    }

    onPickNumber(chosenNumber);
  }

  function resetInputHandler(){
    setEnteredNumber('')
  }

  return (
    <View style={styles.rootContainer} >
      <Title>Guess My Number</Title>
    <View style={styles.inputContainer}>
    <Text style={styles.instructionText} >Enter A Number</Text>
      <TextInput 
      style={styles.numberInput} 
      maxLength={2} 
      keyboardType="number-pad" 
      autoCapitalize='none' 
      autoCorrect={false} 
      value={enteredNumber}
      onChangeText={inputHandler}
      />
      <View style={styles.buttonsContainer} >
        <View style={styles.buttonContainer} >
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer} >
          <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop: 100,
    alignItems : 'center',
  },
  inputContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 36,
    padding: 16,
    backgroundColor: '#72063c',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  },
  instructionText:{
    color: 'yellow',
    fontSize: 24,
  }
});

export default StartGameScreen;

//elevation is to add box shadow (apply only on android)
// important: keyboardType="number-pad"