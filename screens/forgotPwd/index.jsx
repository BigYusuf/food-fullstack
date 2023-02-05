import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

const ForgotPwdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subTitle}>Enter your email address below and we will send you an email with instructions on how to change your password</Text>
      <View>
        <TextInput style={styles.textInput} placeholder='Enter your Email' />
      </View>
      <TouchableOpacity onPress={()=> {}}>
        <View  style={styles.button}>
          <Text style={styles.buttonTxt}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ForgotPwdScreen
