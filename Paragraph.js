import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Paragraph(props) {
  //
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ margin: 20 }}>
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#111416",
              fontWeight: "bold",
            }}
          >
            {props.route.params.paragraphe}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
