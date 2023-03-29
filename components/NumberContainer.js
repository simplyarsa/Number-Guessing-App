import React from 'react'
import { Text, View , StyleSheet} from 'react-native'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles=StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: 'yellow',
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText:{
        color: 'yellow',
        fontSize: 36,
        fontWeight: 'bold',
    }
})