import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
  Image,
} from "react-native";

import faker from "faker";

faker.seed(10);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DATA = [
  {
    key: faker.random.uuid(),
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: faker.random.uuid(),
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: faker.random.uuid(),
    image:
      "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: faker.random.uuid(),
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const DATA2 = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
  };
});

const BG_IMG = `https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

export default function App() {
  const [value, onChangeText] = React.useState("Type your food");

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}
      />

      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          FOOD APP
        </Text>
        <View style={{ padding: 20 }}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>

        <View style={{}}>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <View
                  key={item.key}
                  style={{
                    width: windowWidth,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: windowWidth - 100,
                      height: windowHeight / 3,
                      borderRadius: 16,
                    }}
                  />
                </View>
              );
            }}
          />
        </View>

        <View style={{ padding: 20 }}>
          <FlatList
            data={DATA2}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <View
                  key={item.key}
                  style={{
                    gap: 12,
                    padding: 12,
                    borderRadius: 12,
                    backgroundColor: "#c6c3e3",
                    marginVertical: 8,
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "700", marginRight: 16 }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{ fontSize: 13, fontWeight: "400", marginRight: 12 }}
                  >
                    {item.jobTitle}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginVertical: 32,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 12,
  },
});
