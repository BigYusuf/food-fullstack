
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './constants/theme';
import Router from './router/router';

const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: 'Discover Best Places description',
    image: require('./assets/undraw_breakfast.png'),
  },
  {
    id: 2,
    title: 'Choose Best Food',
    description: 'Discover Best food description',
    image: require('./assets/undraw_online_groceries.png'),
  },
  {
    id: 3,
    title: 'Pick Up the Delivery',
    description: 'Discover Best Places description',
    image: require('./assets/undraw_special_event.png'),
  },
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  
  StatusBar.setBarStyle("light-content", true);

  const buttonLabel = (label) => {
    return(
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {label}
        </Text>
      </View>
    )
  }
  if(!showHomePage){
    return(
      <AppIntroSlider 
        data={slides}
        renderItem = {({item}) => {
          return(
            <View style={styles.onboarding}>
              <Image source={item.image}
                resizeMode="contain"
                style={styles.image} 
              />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

          </View>
          )
        }}
        activeDotStyle={styles.activeDot}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => setShowHomePage(true)}
      />
    
    )
  }
  return (
    <Router/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboarding: {
    flex: 1,
    padding: 15,
    paddingTop: 100,
    alignItems: 'center',
  },
  image: {
    width: SIZES.width - 80,
    height: 400
  },
  title: {
    fontWeight: "bold",
    color: COLORS.title,
    fontSize: SIZES.h1,
  },
  description: {
    textAlign: "center",
    paddingTop: 5,
    color: COLORS.title
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: 25,
  },
  button: {
    padding: 12,
  },
  buttonText: {
    color: COLORS.title,
    fontWeight: "600",
    fontSize: SIZES.h4,
  },
});
