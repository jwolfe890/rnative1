import React, { Component } from 'react';
import { ReactNative, FlatList, ListFooterComponent, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import ListItem from './ListItem'

class ItemsList extends Component {

    render() {
        return (
            <View style={{ flex: 3, paddingTop: 24 }}>
                <FlatList
                    data={this.props.items} 
                    renderItem={({ item }) => (
                        <ListItem 
                            name={item.item} quantity={item.quantity} id={item.id}
                        />
                    )}
                    keyExtractor={item => item.id.toString() }
                />
            </View>
          );
        }
    }

  const mapStateToProps = state => {
    return { items:  state.items.reverse() };
  };

  
export default connect(mapStateToProps)(ItemsList);



