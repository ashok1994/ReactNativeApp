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
  Image,
  ListView
} from 'react-native';

import { Card, Button, Header, List, ListItem } from 'react-native-elements';

import LogoComponent from './components/LogoComponent';
import BannerComponent from './components/BannerComponent';
import BlogListItemComponent from './components/BlogListItemComponent';


var data = require('./json/blogs.json');
var extraData = require('./json/extra.json');

export default class AwesomeProject extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    data.unshift({ first: true })
    data.push({ last: true })
    this.state = {
      dataSource: ds.cloneWithRows(data),
      isLoading: false
    }

    this.scrolledDown = this.scrolledDown.bind(this);
  }

  scrolledDown() {
    var last = data.pop();
    var first = data.shift();
    data = data.concat(extraData);
    data.unshift(first);
    data.push(last);
    this.setState({
      isLoading: true
    })

    setTimeout(() => {

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoading: false
      })
    }, 1000)

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
          <ListView
            dataSource={this.state.dataSource}
            onEndReachedThreshold={1}
            onEndReached={this.scrolledDown}
            renderRow={(rowData) => {
              if (rowData && rowData.first) {
                return (<BannerComponent />)
              } else if (rowData && rowData.last) {
                return (<View style={{ height: 50 }}></View>)
              }
              else {
                return (
                  <BlogListItemComponent
                    title={rowData.title}
                    subtitle={rowData.subtitle}
                    image={rowData.image}
                    avatar={rowData.avatar}
                  />
                )
              }
            }} />
        </View>
        {
          this.state.isLoading ? <Image source={require('./images/ringalt.gif')} style={{ width: 40, height: 40, alignSelf: 'center' }} /> : null
        }

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
