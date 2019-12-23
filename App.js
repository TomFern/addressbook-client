import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

const API_SERVER = process.env['API_SERVER'];

export default class FetchAddressbook extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  // fetch persons
  componentDidMount(){
    return fetch(API_SERVER+'/all')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          // dataSource: responseJson.movies,
          dataSource: responseJson,
        }, 
        function(){});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
    <View style={styles.container}>
        <Text style={styles.personName}>Persons</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Item firstName={item.firstName} lastName={item.lastName} />}
          keyExtractor = { (item) => item.id.toString() }
        />
      </View>
    );
  }
}

function Item({ firstName, lastName }) {
  return (
    <View style={styles.item}>
      <Text style={styles.personName}>{lastName}, {firstName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  personName: {
    fontSize: 28,
  },
});
