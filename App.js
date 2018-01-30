import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, FlatList, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    textValue: '',
    items: ['Delete me once you start coding']
  }

  listItemRenderer(item) {
      return (
        <View style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      );
    }

  insert() {
      //Perform insert to SQLite
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.textValue}
          onChangeText={(text) => this.setState({textValue: text})}
        />
        <FlatList
          data={this.state.items}
          style={styles.list}
          renderItem={({item}) => this.listItemRenderer(item)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent = {() => (<View style={{height: 10}}/>)}
        />
        <Button
          title={"Add Item"}
          onPress={this.insert}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    marginTop: 16,
    marginBottom: 16,
    borderBottomWidth: 2,
    fontSize: 18,
    justifyContent: 'center'
  },
  list: {
    width: '100%',
    flex: 1
  },
  listItem: {
    backgroundColor: "#4286f4",
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18,
    color: 'white',
  }
});
