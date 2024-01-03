import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { bg, grey, buttonColor, height } from "./Login";
import profile from "../assets/Home.jpg";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
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
                  style={{
                    width: 45,
                    height: 45,
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
              marginTop: 6,
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
          <TouchableOpacity>
            <View
              style={{
                position: "relative",
                height: height / 4.3,
                marginTop: 6,
                marginBottom: 45,
                display: "flex",
              }}
            >
              <View style={[styles.middle, { top: 10, padding: 15 }]}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 13,
                  }}
                >
                  <Text style={[styles.text, { fontSize: 23 }]}>
                    Daily progress
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: 80,
                      position: "relative",
                    }}
                  >
                    <Image
                      source={profile1}
                      style={{
                        width: "33%",
                        height: 27,
                        borderRadius: 40,
                        marginLeft: 10,
                        borderColor: "#292929",
                        borderWidth: 2,
                        position: "absolute",
                        zIndex: 1,
                      }}
                    />
                    <Image
                      source={profile2}
                      style={{
                        width: "33%",
                        height: 27,
                        borderRadius: 40,
                        marginLeft: 10,
                        borderColor: "#292929",
                        borderWidth: 2,
                        position: "absolute",
                        left: 16,
                      }}
                    />
                    <Image
                      source={profile3}
                      style={{
                        width: "33%",
                        height: 27,
                        borderRadius: 40,
                        marginLeft: 10,
                        borderColor: "#292929",
                        borderWidth: 2,
                        position: "absolute",
                        left: 32,
                        zIndex: -1,
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={[styles.text, { color: "#969696", marginBottom: 25 }]}
                >
                  Here you can see your daily task
                </Text>
                <Text style={[styles.text, { fontSize: 17, marginBottom: 10 }]}>
                  76%
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: 6,
                    backgroundColor: grey,
                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      width: "76%",
                      height: 6,
                      borderRadius: 20,
                      backgroundColor: buttonColor,
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={[
                  styles.middle,
                  {
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
                    top: 30,
                    zIndex: -3,
                    left: 15,
                    right: -15,
                    width: "85%",
                  },
                ]}
              ></View>
            </View>
          </TouchableOpacity>
          <Text style={[styles.text, { fontSize: 20, marginBottom: 10 }]}>
            Categories
          </Text>
          <View
            style={{
              height: height / 4.5,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                height: "90%",
                flex: 0.48,
                backgroundColor: "#292929",
                borderRadius: 20,
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: buttonColor,
                    width: 30,
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Ionicon name="book" color="white" size={15} />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: 80,
                    position: "relative",
                  }}
                >
                  <Image
                    style={{
                      width: "33%",
                      height: 27,
                      borderRadius: 40,
                      marginLeft: 10,
                      borderColor: "#292929",
                      borderWidth: 2,
                      position: "absolute",
                      right: 15,
                    }}
                    source={profile2}
                  />
                  <Image
                    style={{
                      width: "33%",
                      height: 27,
                      borderRadius: 40,
                      marginLeft: 10,
                      borderColor: "#292929",
                      borderWidth: 2,
                      position: "absolute",
                      right: 0,
                      zIndex: -1,
                    }}
                    source={profile1}
                  />
                </View>
              </View>
              <Text style={{ color: "#969696", marginTop: 9 }}>5 New</Text>
              <Text style={[styles.text, { marginTop: 1, fontSize: 20 }]}>
                Books
              </Text>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <View
                  style={{ height: 6, backgroundColor: grey, borderRadius: 20, width: '60%' }}
                >
                  <View style={{ height: '100%', backgroundColor: buttonColor, borderRadius: 20, width:(9/24)*100 }}></View>
                </View>
                <View style={{ backgroundColor: buttonColor, width: '33%', height: 20, borderRadius: 20, display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={[styles.text,{fontSize: 11}]}>9/24</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: "90%",
                flex: 0.48,
                backgroundColor: "#292929",
                borderRadius: 20,
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f0991f",
                    width: 30,
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Ionicon name="archive" color="white" size={15} />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: 80,
                    position: "relative",
                  }}
                >
                  <Image
                    style={{
                      width: "33%",
                      height: 27,
                      borderRadius: 40,
                      marginLeft: 10,
                      borderColor: "#292929",
                      borderWidth: 2,
                      position: "absolute",
                      right: 0,
                      zIndex: -1,
                    }}
                    source={profile1}
                  />
                </View>
              </View>
              <Text style={{ color: "#969696", marginTop: 9 }}>2 New</Text>
              <Text style={[styles.text, { marginTop: 1, fontSize: 20 }]}>
                Archives
              </Text>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <View
                  style={{ height: 6, backgroundColor: grey, borderRadius: 20, width: '60%' }}
                >
                  <View style={{ height: '100%', backgroundColor: "#f0991f", borderRadius: 20, width:(4/18)*100 }}></View>
                </View>
                <View style={{ backgroundColor: "#f0991f", width: '33%', height: 20, borderRadius: 20, display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={[styles.text,{fontSize: 11}]}>4/18</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    paddingTop: 30,
    padding: 20,
    flex: 1,
    backgroundColor: bg,
    display: "flex",
  },
  middle: {
    backgroundColor: "#292929",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5
      }
    }),
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
