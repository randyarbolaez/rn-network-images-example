import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D8EA0',
    flex: 1,
    padding: 20,
  },
});

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  changeLoadState() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Button
            color="#68B0AB"
            title="Get Dog Picture"
            onPress={() => this.changeLoadState()}
          />
          <ActivityIndicator size="large" color="#C8D5B9" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Button
          color="#68B0AB"
          title="Get Dog Picture"
          onPress={() => this.changeLoadState()}
        />
        <Image
          source={{
            uri: `https://random.dog/93ade0d8-ab54-4074-b7ba-89db44ec3b24.jpg`,
          }}
          style={{ width: 375, height: 400 }}
        />
      </View>
    );
  }
}
