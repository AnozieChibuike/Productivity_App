import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import HomePic from "../assets/Home.jpg";

export const bg = "#1a1a1a"
export const buttonColor = "#1E90FF"
export const grey = "#4f4f4f"

const dimension = Dimensions.get("window");
export const height = dimension.height;
export const width = dimension.width;
export default Login = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ height: height / 3 }}>
          <Image resizeMode="contain" source={HomePic} style={styles.image} />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.text}>The only Productivity app you need</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={[styles.button, styles.button1]}
            onPress={() => {navigation.navigate('Dashboard')}}
          >
            <Text style={styles.buttonText}>Sign in with Email</Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 15,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity style={[styles.button, styles.button2]}>
              <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.button2]}>
              <Text style={styles.buttonText}>Apple ID</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ color: "#c9c5c5" }}>
          By Continuing you agree to the Terms and Conditions
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
    display: "flex",
    flex: 1,
    backgroundColor: bg,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
  },
  button1: {
    backgroundColor: buttonColor,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 100,
  },
  button2: {
    width: width / 2.4,
    borderColor: grey,
    borderWidth: 1,
  },
});
