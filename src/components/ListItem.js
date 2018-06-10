import React, { Component } from 'react';
import { Text, View, ReactNative, TouchableOpacity } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import { connect } from 'react-redux';
import { deleteItem } from '../actions/items';

class ListItem extends Component {

    onButtonPress() {
        this.props.deleteItem(this.props.id)
    }

    render() {
        return (
        <Card>
            <View style={styles.itemsStyle}>
                <Text style={styles.txt}>ITEM: {this.props.name}</Text>
                <Text>QTY: {this.props.quantity}</Text>
            </View>
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                <Text style={styles.deleteStyle}>X</Text>
            </TouchableOpacity>
        </Card>
        );
    }
}

export default connect(null, {deleteItem})(ListItem);

const styles = {
    itemsStyle: {
        justifyContent: "space-between",
        flexDirection: "column",
        paddingLeft: 5
    },
    deleteStyle: {
        paddingTop: 7,
        paddingRight: 5
    },
    txt: {
        paddingBottom: 2
    }
  };


