import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

export default class BlogDetail extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                {/* Main Intro of Autor*/}
                <View style={{ height: 120, backgroundColor: 'white' }}>
                    <View style={{ flex: 2, flexDirection: 'row', height: 100 }}>
                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                style={{ height: 80, width: 80, borderRadius: 120 }} />

                        </View>
                        <View style={{ flex: 3, backgroundColor: 'transparent', paddingTop: 10, paddingLeft: 5 }}>
                            <Text style={{ fontSize: 20 }}>
                                Angus Hervey
                            </Text>
                            <Text>
                                I write a fortnightly newsletter that showcases stories of human progress from around ...
                            </Text>
                            <Text style={{ marginTop: 4 }}>
                                Feb 2 . 5 min read
                            </Text>
                        </View>
                    </View>


                </View>
                {/*Main Banner Image*/}
                <View style={{ height: 250, backgroundColor: 'red' }}>
                    <Image
                        style={{ height: '100%' }}
                        source={{ uri: 'https://cdn-images-1.medium.com/max/2000/1*DkX_zsiUdyXq4fywxxejpw.jpeg' }} />
                </View>
                {/*Heading*/}
                <Text style={{ fontSize: 35, textAlign: 'left', color: 'black', padding: 10 }}>
                    The World Isn't Getting Worse, We are Getting More Connected
                </Text>
                {/*Subtitle*/}
                <Text style={{ fontSize: 29, padding: 10 }}>
                    Intolerance, bigotry and selfishness aren’t new. What’s new is the network, and that changes everything.
                </Text>
                {/*
                    <View style={{ flex: 7, flexDirection: 'row', height: 100 }}>
                    </View>*/}
            </ScrollView>

        )
    }

}