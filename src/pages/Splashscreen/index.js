import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackgroundSS, SplashS } from "../../assets";

const Splashscreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundSS}
        style={styles.imageBackground}
      >
        <View style={styles.imageView}>
          <Image source={SplashS} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            Coffee so good, your taste buds will love it
          </Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>
            The best grain, the finest roast, the most powerful flavor.
          </Text>
        </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('MainApp')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  imageView: {
    marginTop: 120,
  },
  titleView: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
    paddingHorizontal: 100,
    textAlign: "center",
  },
  subtitleView: {
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    paddingHorizontal: 90,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#00512C",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 60,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Splashscreen