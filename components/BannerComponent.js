import React, { Component } from 'react';
import { Image, View, Text, AppRegistry } from 'react-native';
import { Button } from 'react-native-elements';

export default class BannerComponent extends Component {

    render() {
        return (
            <View style={{ backgroundColor: '#020733', padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', alignContent: 'center', fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
                    Move thinking forward.
                </Text>

                <Text style={{ color: 'white', alignContent: 'center', fontSize: 20, textAlign: 'center' }}>
                    Medium is a community of readers and writers offering unique perspectives on ideas large and small.
                </Text>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <Button
                        title="Get the App"
                        backgroundColor="#e368d6"
                        borderRadius={20}
                        buttonStyle={{ borderWidth: 1, borderColor: '#e368d6' }}

                    />

                    <Button
                        title="Learn More"
                        backgroundColor="transparent"
                        borderRadius={20}
                        buttonStyle={{ borderWidth: 1, borderColor: '#e368d6' }}
                    />
                </View>


            </View>
        );
    }

}