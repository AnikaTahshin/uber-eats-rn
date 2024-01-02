import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const HeaderTabs = () => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 5 }}>
      <HeaderButton title="Delivery" btnColor="#000" textColor="#fff" />
      <HeaderButton title="Pickup" btnColor="#fff" textColor="#000" />
    </View>
  );
};

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props?.btnColor,

      paddingHorizontal: 16,
      borderRadius: 30,
      paddingVertical: 6,
    }}
  >
    <Text style={{ color: props?.textColor, fontSize: 15, fontWeight: 900 }}>
      {props?.title}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({});
