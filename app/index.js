import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const route = useRouter();

  return (
    <SafeAreaView style={styles.flex}>
      <Stack.screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            headerShadowVisible: false,
          },
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgLightWhite: {
    backgroundColor: COLORS.lightWhite,
  },
});

export default Home;
