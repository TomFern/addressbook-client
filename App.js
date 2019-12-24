// Mobile Client example for semaphore-demo-cicd-kubernetes (addressbook server)

import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

const API_SERVER = process.env.API_SERVER;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 10,
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  personName: {
    fontSize: 24,
  },
  importantText: {
      color: 'red',
      fontSize: 32,
  },
});

function Item({ firstName, lastName }) {
  return (
    <View style={styles.item}>
      <Text style={styles.personName}>{lastName}, {firstName}</Text>
    </View>
  );
}

export default class FetchAddressbook extends React.Component {
  constructor(props){
    super(props);
      this.state = { isLoading: true, nodata: true };
  }

  // fetch persons
  componentDidMount(){

    return fetch(API_SERVER + '/all')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          nodata: false,
          dataSource: responseJson,
        },
        function(){});
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: error,
        });
      });

  }

  render(){

    if (this.state.isLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    }

    if (this.state.nodata) {
      return (
        <View style={styles.container}>
            <Text style={styles.importantText}>No data found.</Text>
        </View>
      );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.personName}>Addressbook</Text>
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <Item lastName={item.lastName} firstName={item.firstName} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );

  }
}

