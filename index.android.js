/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import { Card, Button, Header, List, ListItem } from 'react-native-elements';

import LogoComponent from './components/LogoComponent';
import BannerComponent from './components/BannerComponent';

export default class AwesomeProject extends Component {

  myAlert() {

  }

  render() {

    let pic = {
      uri: "https://www.w3schools.com/css/trolltunga.jpg"
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Header
            leftComponent={<LogoComponent />}
            rightComponent={{ icon: 'search' }}
            outerContainerStyles={{ height: 55 }}
            backgroundColor='#fff'
          />
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={{ marginLeft: 10, fontSize: 15, color: 'rgba(0,0,0,0.4)' }}>Home </Text>
            <Text style={{ marginLeft: 10, fontSize: 15, color: 'rgba(0,0,0,0.4)' }}>Popular on Medium </Text>
            <Text style={{ marginLeft: 10, fontSize: 15, color: 'rgba(0,0,0,0.4)' }}>Audio </Text>
            <Text style={{ marginLeft: 10, fontSize: 15, color: 'rgba(0,0,0,0.4)' }}>Members only </Text>
            <Text style={{ marginLeft: 10, fontSize: 15, color: 'rgba(0,0,0,0.4)' }}>Handpicked By Medium Staff </Text>
          </ScrollView>
        </View>

        <View style={{ flex: 14 }}>

          <ScrollView
          >
            <BannerComponent />

            <Card
              containerStyle={{ margin: 10 }}

              imageStyle={{ height: 300, resizeMode: 'cover' }}
              image={{ uri: 'https://royalenfield.com/redditch/images/main-carousel-red-bg.jpg' }} >
              <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 25 }}>
                What to watch for in 2017 NBA Free Agency?
               </Text>
              <Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 19 }}>
                All eyes are on the fate of Lob City and Gordon Hayward, but there are plenty of other names to look out for
               </Text>
              <List containerStyle={{ borderTopColor: '#fff', borderBottomColor: '#fff' }} >
                <ListItem
                  containerStyle={{ borderTopColor: '#fff', borderBottomColor: '#fff' }}
                  roundAvatar
                  avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                  rightIcon={{ name: 'thumb-up', color: 'blue' }} />
              </List>
            </Card>
            <View style={{ height: 100 }}></View>

          </ScrollView>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
