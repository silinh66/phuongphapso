import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // console.log('result', this.props.result);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Đa thức có dạng</Text>
        <Text style={styles.text}>{`y = ${this.props.result}`}</Text>
        <TouchableOpacity 
            style={styles.homeButton}
            onPress={() => {
                Navigation.setStackRoot(this.props.componentId, {
                    component: {
                        name: 'App',
                        options: {
                            topBar: {
                                title: {
                                    text: "Phương pháp số ",
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    alignment: 'center'
                                },
                                background: {
                                    color: 'orange'
                                },
                                backButton: {
                                    color: 'white'
                                }
                            }
                        }
                    }
                })
            }}
            >
            <Text style={styles.textButton}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 200
    },
    homeButton: {
        marginTop: 100,
        // borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 140,
        paddingVertical: 10,
        backgroundColor: 'orange',
        marginBottom: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange'
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
});