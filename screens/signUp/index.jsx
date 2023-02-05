import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS } from '../../constants/theme'
import { FontAwesome } from '@expo/vector-icons';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../../assets/image1.jpg")}
        style={styles.backgroundImg} resizeMode="cover" >
          <ScrollView>
            <View style={styles.topContainer}>
              <Text style={styles.title}>Get Started</Text>
              <Text style={styles.subTitle}>Sign up to continue</Text>
            </View>
            <View style={styles.dataContainer}>
              <TextInput placeholder='Email' style={styles.textInput} placeholderTextColor={COLORS.white} />
              <TextInput placeholder='Contact Number' style={styles.textInput} placeholderTextColor={COLORS.white} />
              <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor={COLORS.white} />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.button1}>
                  <Text  style={styles.btnText}>SIGN UP</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.button2}>
                  <View style={styles.logo}>
                  <FontAwesome style={styles.imgLogo} name="facebook-f" size={24} color="white" />
                   {/* <Image 
                      source={require("../../assets/undraw_online_groceries.png")}
                      resizeMode="contain"
                      style={styles.imgLogo}
                    />*/}
                  </View>
                  <Text style={styles.btnText}>Sign In with facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                <Text style={styles.text}>Already have an account? | Sign In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      
    </View>
  )
}

export default SignUpScreen
