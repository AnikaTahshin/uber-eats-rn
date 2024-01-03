import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 5 }}>
      <HeaderButton
        title="Delivery"
        btnColor="#000"
        textColor="#fff"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="#fff"
        textColor="#000"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props?.activeTab === props.title ? "#000" : "#fff",

      paddingHorizontal: 16,
      borderRadius: 30,
      paddingVertical: 6,
    }}
    onPress={() => props.setActiveTab(props.title)}
  >
    <Text
      style={{
        color: props?.activeTab === props.title ? "#fff" : "#000",
        fontSize: 15,
        fontWeight: 900,
      }}
    >
      {props?.title}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({});
