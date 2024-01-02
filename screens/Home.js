import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <HeaderTabs />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
