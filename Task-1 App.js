import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: 10,
    title: "Test",
  },
  {
    id: 9,
    title: "Test",
  },
  {
    id: 8,
    title: "Test",
  },
  {
    id: 7,
    title: "Test",
  },
  {
    id: 6,
    title: "Test",
  },
  {
    id: 5,
    title: "Test",
  },
  {
    id: 4,
    title: "Test",
  },
  {
    id: 3,
    title: "Test",
  },
  {
    id: 2,
    title: "Test",
  },
  {
    id: 1,
    title: "Test",
  },
  {
    id: 0,
    title: "Test",
  },
];

const Item = ({ id, title }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemId}>{id}</Text>
      </View>
    </View>
  );
};

const App = () => {
  const renderItem = ({ item }) => {
    return <Item id={item.id} title={item.title} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Title</Text>
        </View>
      </ScrollView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
  },
  titleContainer: {
    height: 150,
    backgroundColor: "#4169e1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  titleText: {
    fontSize: 26,
    color: "#FFFFFF",
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: "#000080",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemId: {
    fontSize: 26,
    color: "#FFFFFF",
  },
});

export default App;
