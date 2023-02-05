import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS } from '../../constants/theme'
import { FontAwesome } from '@expo/vector-icons';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../../assets/image1.jpg")}
        style={styles.backgroundImg} resizeMode="cover" >
          <ScrollView>
            <View style={styles.topContainer}>
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subTitle}>Sign into continue</Text>
            </View>
            <View style={styles.dataContainer}>
              <TextInput placeholder='Username' style={styles.textInput} placeholderTextColor={COLORS.white} />
              <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor={COLORS.white} />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('BottomStack')}>
                <View style={styles.button1}>
                  <Text  style={styles.btnText}>SIGN IN</Text>
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
                  <Text style={styles.btnText}>Connect with facebook</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('forgotpwd')}>
                <Text style={styles.text}>Forgot your password? Click here</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text style={styles.text}>Don't have an account? | Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      
    </View>
  )
}

export default SignInScreen
