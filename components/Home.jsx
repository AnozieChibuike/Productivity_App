import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { bg, grey, buttonColor, height } from "./Login";
import profile from "../assets/Home.jpg";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";

export default Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.topText}>Home</Text>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Ionicon name="search" color="white" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={profile}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ color: "white", fontSize: 48, fontWeight: "600" }}>
            Hello
          </Text>
          <Text style={{ color: "white", fontSize: 48, fontWeight: "600" }}>
            Minion King
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginRight: 40,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={[{ backgroundColor: buttonColor }, styles.button]}
            >
              <Text style={{ color: "white" }}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 30 }}>
              <Text style={{ color: grey }}>Productivity</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "relative",
              height: height / 4.3,
              marginTop: 20,
              display: "flex",
            }}
          >
            <View style={[styles.middle, { top: 10 }]}></View>
            <View
              style={[
                styles.middle,
                {
                  backgroundColor: "green",
                  top: 19,
                  zIndex: -1,
                  left: 5,
                  right: -5,
                  width: "95%",
                },
              ]}
            ></View>
            <View
              style={[
                styles.middle,
                {
                  backgroundColor: "orange",
                  top: 24,
                  zIndex: -2,
                  left: 10,
                  right: -10,
                  width: "90%",
                },
              ]}
            ></View>
            <View
              style={[
                styles.middle,
                {
                  backgroundColor: "tomato",
                  top: 30,
                  zIndex: -3,
                  left: 15,
                  right: -15,
                  width: "85%",
                },
              ]}
            ></View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 20,
    flex: 1,
    backgroundColor: bg,
    display: "flex",
  },
  middle: {
    backgroundColor: grey,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
  },
  topText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  button: {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    flex: 1,
  },
});
