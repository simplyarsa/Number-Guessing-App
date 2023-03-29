import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.container}
        onPress={onPress}
        android_ripple={{ color: '#72063c' }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {

  },
  container: {
    backgroundColor: 'white',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 8,
    elevation: 2,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  }
});


export default PrimaryButton;

//can pass array of style object
