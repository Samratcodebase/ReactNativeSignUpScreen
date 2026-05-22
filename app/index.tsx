import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { Checkbox } from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <StatusBar style="dark" />

      <View
        style={{
          width: "100%",
          height: 350,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("../assets/images/HighBackgroud.png")}
          style={{
            width: "100%",
            height: 500,
            position: "absolute",
            top: -0,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: -150,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          borderRadius: 40,
          gap: 10,
          paddingTop: 50,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#253d74" }}>
          Get Started!
        </Text>
        <View style={[{ flexDirection: "row", gap: 5 }]}>
          <Text style={styles.baseText}>Already have an account?</Text>
          <Pressable style={{ justifyContent: "center" }}>
            <Text style={styles.LoginText}>Login</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.TextInputContainer}>
        <View style={styles.TextInput}>
          <Text style={styles.TextInpuLable}>Name</Text>

          <TextInput
            placeholder="Enter Full Name"
            style={{
              flex: 1,
            }}
          />
        </View>

        <View style={styles.TextInput}>
          <Text style={styles.TextInpuLable}>Email</Text>

          <TextInput
            placeholder="Enter Your Email"
            style={{
              flex: 1,
            }}
          />
        </View>

        <View style={styles.TextInput}>
          <Text style={styles.TextInpuLable}>Password</Text>

          <TextInput
            placeholder="Enter Your Password"
            style={{
              flex: 1,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 15, marginLeft: -90 }}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#253d74" : undefined}
          />
          <Text>
            I agree to{" "}
            <Text
              style={{ color: "#253d74", fontWeight: "bold", fontSize: 15 }}
            >
              Terms and Conditions
            </Text>
          </Text>
        </View>
        <Pressable style={styles.SignUpContainer}>
          <Text style={styles.SignUpText}>Sign Up</Text>
        </Pressable>
      </View>
      <Text style={{ marginLeft: 150, marginTop: 10 }}>Sign Up With</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 20,
          marginTop: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="facebook" size={24} color="#1877F2" />

        <AntDesign name="google" size={24} color="#DB4437" />
        <AntDesign name="apple" size={24} color="#000000" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "400",
    fontSize: 15,
    paddingLeft: 30,
  },
  innerText: {
    color: "#253D74",
    fontSize: 15,
    fontWeight: "bold",
  },
  LoginText: {
    color: "#253D74",
    fontSize: 15,
    fontWeight: "bold",
  },
  SignUpContainer: {
    width: "90%",
    height: 60,
    backgroundColor: "#253D74",
    borderWidth: 1,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  SignUpText: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
  TextInput: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderRadius: 17,

    position: "relative",
    paddingLeft: 20,
  },

  TextInpuLable: {
    position: "absolute",
    top: -10,
    left: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 10,
  },
  TextInputContainer: {
    marginTop: 0,
    gap: 20,
    alignItems: "center",
  },
});
