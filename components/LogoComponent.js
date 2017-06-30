import React, { Component } from 'react';
import { Image, View, Text, AppRegistry } from 'react-native';


export default class LogoComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                    source={{ uri: 'https://image.flaticon.com/icons/png/512/174/174858.png' }}
                    style={{ width: 30, height: 30 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 20, height: 40, color: '#000' }}>MEDIUM</Text>
            </View>
        )
    }
}



