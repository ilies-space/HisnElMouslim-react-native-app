import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { DATA } from "./Data";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Home from "./Home";
import Paragraph from "./Paragraph";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { backgroundColor } from "./colors";
export default function App() {
  //
  const Stack = createStackNavigator();
  //
  const [backgroundColor, setbackgroundColor] = useState("#111416");

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: backgroundColor,
              },
              title: "حصن المسلم",
              headerTintColor: "#7E868C",
              cardShadowEnabled: true,
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 20 }}
                  onPress={() => console.log("lightOn")}
                >
                  <Entypo name="light-up" size={26} color="#7E868C" />
                </TouchableOpacity>
              ),
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Paragraph"
            component={Paragraph}
            options={{
              title: "الرجوع",
              headerStyle: {
                backgroundColor: backgroundColor,
              },
              headerTintColor: "#7E868C",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
