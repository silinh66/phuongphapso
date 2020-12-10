import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class OptionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
            style={styles.banPhimInput}
            onPress={() => {
                Navigation.push(this.props.componentId, {
                    component: {
                        name: 'InputScreen',
                        options: {
                            topBar: {
                                title: {
                                    text: "Input ",
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
            <Text style={styles.textButton}>Nhập input từ bàn phím</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fileInput}>
            <Text style={styles.textButton}>Nhập input từ file</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    banPhimInput: {
        marginTop: 10,
        // borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 65,
        paddingVertical: 10,
        backgroundColor: 'orange',
        marginBottom: 10,
    },
    container: {
        alignItems: 'center',
        paddingTop: 200,
    },
    fileInput: {
        marginTop: 10,
        // borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 88,
        paddingVertical: 10,
        backgroundColor: 'orange',
        marginBottom: 10,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
});