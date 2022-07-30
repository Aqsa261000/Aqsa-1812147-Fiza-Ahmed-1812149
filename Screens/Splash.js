import * as React from 'react';
import {View, Text, StyleSheet, Image, Button, ImageBackground} from 'react-native'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 3000);
      }
  render() {
    return (
      <View style={styles.viewcontainer1}>
        <Image
          source={require('../assests/logoimage.png')}
          style={{ width: 80, height: 80 }}
        />
        <Text style={styles.text1}>Health First</Text>
        <Text style={{ fontStyle: 'italic', paddingBottom: 20 }}>
          Because Health Comes First
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewcontainer1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  logoimage: {
    flex: 1,
  },
});

