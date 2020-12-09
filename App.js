import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bacString: '',
      bac: null,
      xString: [],
      yString: [],
      x: null,
      y: null,
      x1: '',
      x2: '',
      x3: '',
      y1: '',
      y2: '',
      y3: '',
      listInput: {
        x: [],
        y: []
      },
    };
  }

  render() {
    console.log('bac', this.state.bac);
    // console.log('x', this.state.listInput.x);
    // console.log('y', this.state.listInput.y);
    console.log('xString', this.state.xString);
    console.log('yString', this.state.yString);
    const listInput=[];
    if(this.state.bac!==null){
      for (let i = 0; i < this.state.bac; i++) {
        listInput.push((
          <View key={i} style={{flexDirection: 'row', margin: 5}}>
            <TextInput style={styles.valueInput} placeholder={`Enter x${i+1}`} placeholderTextColor="white" 
            onChangeText={(text) => {
              let newArray = [...this.state.xTring];
                  newArray[i]=text;
                  this.setState({
                    xTring: newArray,
            })}}/>
            <TextInput style={styles.valueInput} placeholder={`Enter y${i+1}`} placeholderTextColor="white"
            onChangeText={(text) => {
              let newArray = [...this.state.yTring];
                  newArray[i]=text;
                  this.setState({
                    yTring: newArray,
            })}}/>
          </View>
        ))
      }
    }
    
     
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Phương pháp số</Text>
        <TextInput 
        style={styles.bacInput}
        placeholder="Nhập bậc của đa thức"
        placeholderTextColor="white"
        onChangeText={(bacString) => {
          this.setState({
            bacString,
          })
        }}/>
        <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          this.setState({
            bac: this.state.bacString,
          });
          Keyboard.dismiss();
        }}>
          <Text style={styles.textSubmit}>Submit</Text>
        </TouchableOpacity>  
            <View>
              {listInput.length !==0 ? 
                <View>
                  {listInput}
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {
                      this.setState({
                        listInput: {
                          x: [...this.state.listInput.x, this.state.x1, this.state.x2, this.state.x3],
                          y: [...this.state.listInput.y, this.state.y1, this.state.y2, this.state.y3]
                        }
                      });

                      Keyboard.dismiss();
                    }}>
                    <Text style={styles.textSubmit}>Submit value</Text>
                  </TouchableOpacity>
                  
              </View>  
               : null}
            </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bacInput: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'orange',
    color: 'white',
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    // alignSelf: 'center'
  },
  submitButton: {
    marginTop: 10,
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 65,
    paddingVertical: 10,
    backgroundColor: 'orange'
  },
  textSubmit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  valueInput: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'orange',
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  }
});