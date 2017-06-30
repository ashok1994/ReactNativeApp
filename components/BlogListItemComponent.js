import React, { Component } from 'react';
import { View, Text, Image, ToastAndroid } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';

export default class BlogListItemComponent extends Component {
    constructor(props) {
        super(props);
        if (props.liked) {
            this.state = {
                likeStyle: {
                    name: 'thumb-up', color: 'blue'
                }
            }
        } else {
            this.state = {
                likeStyle: {
                    name: 'thumb-up', color: 'gray'
                }
            }
        }


        this.clicked = this.clicked.bind(this);
    }


    clicked() {

        this.setState(prevState => {
            if (prevState.likeStyle.color == 'blue') {
                return {
                    likeStyle: {
                        name: 'thumb-up',
                        color: 'gray'
                    }
                }
            } else {
                return {
                    likeStyle: {
                        name: 'thumb-up',
                        color: 'blue'
                    }
                }
            }

        })
    }

    render() {

        return (
            <Card
                containerStyle={{ margin: 10 }}

                imageStyle={{ height: 300, resizeMode: 'cover' }}
                image={{ uri: this.props.image }} >
                <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 25 }}>
                    {this.props.title}
                </Text>
                <Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 19 }}>
                    {this.props.subtitle}
                </Text>
                <List containerStyle={{ borderTopColor: '#fff', borderBottomColor: '#fff' }} >
                    <ListItem
                        containerStyle={{ borderTopColor: '#fff', borderBottomColor: '#fff' }}
                        roundAvatar
                        avatar={{ uri: this.props.avatar }}
                        rightIcon={this.state.likeStyle}
                        onPressRightIcon={this.clicked} />
                </List>
            </Card>
        )
    }

}