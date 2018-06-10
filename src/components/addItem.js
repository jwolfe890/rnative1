import React, { Component } from 'react';
import { TextInput, Text, View, ReactNative, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';


class AddItem extends Component {

    state = {
        item: "",
        quantity: ""
    }

    onButtonPress() {
        this.props.addItem(this.state)
        this.setState({
            item: "",
            quantity: ""
        })
    }
    
    render() {
    
    const { input, container, add, addText } = styles;
        return (
            <View style={container}>
                <TextInput placeholder="add item" 
                    placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                    style={input} 
                    onChangeText={item => this.setState({ item })}
                    value={this.state.item}
                />
                <TextInput placeholder="add quantity" 
                    placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                    style={input}
                    onChangeText={quantity => this.setState({ quantity })}
                    value={this.state.quantity}
                />
                <TouchableOpacity style={add} onPress={this.onButtonPress.bind(this)}>
                    <Text style={addText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, {addItem})(AddItem);

const styles = {
    input: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 5
        },
    add: {
        backgroundColor: '#1F2623',
        paddingVertical: 15,
        borderRadius: 10
    },
    addText: {
        textAlign: 'center',
        color: 'white'
    },
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
  };

