import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ScrollView } from 'react-native';

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
   
      listInput: {
        x: [],
        y: []
      },
    };
  }

  submitValues = () => {
    var arrayX = this.state.listInput.x;
    var arrayY = this.state.listInput.y;
    for (let i = 0; i < this.state.bac; i++) {
      var keyX="x"+i.toString();
      var keyY="y"+i.toString();
      arrayX.push(Number.parseInt(this.state[keyX], 10));
      arrayY.push(Number.parseInt(this.state[keyY], 10))
    }
    this.setState({
      listInput: {
        x: arrayX,
        y: arrayY
      }
    })
    Keyboard.dismiss();
  }

  getInput = (listInput) => {
    if(this.state.bac!==null){
      for (let i = 0; i < this.state.bac; i++) {
        listInput.push((
              <View key={i} style={{flexDirection: 'row', margin: 5}}>
            <TextInput style={styles.valueInput} placeholder={`Enter x${i+1}`} placeholderTextColor="white" 
            onChangeText={(text) => {
              var key = "x"+i.toString();
                  this.state[key]=text;
                  }}/>
            <TextInput style={styles.valueInput} placeholder={`Enter y${i+1}`} placeholderTextColor="white"
            onChangeText={(text) => {
              var key = "y"+i.toString();
                  this.state[key]=text;
                  }}/>
          </View>        
        ))
      }
    }
    return listInput;
  }

  render() {
    const listInput=[];
    this.getInput(listInput);
    console.log('listInput.x = ', this.state.listInput.x);
    console.log('listInput.y = ', this.state.listInput.y);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
                    onPress={this.submitValues}>
                    <Text style={styles.textSubmit}>Submit value</Text>
                  </TouchableOpacity>
                  
              </View>  
               : null}
            </View>  
                  </ScrollView>
        
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    alignItems: 'center'
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: 'orange',
  //   // alignSelf: 'center'
  // },
  submitButton: {
    marginTop: 10,
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 65,
    paddingVertical: 10,
    backgroundColor: 'orange',
    marginBottom: 10,
  },
  textSubmit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  valueInput: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'orange',
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  scrollView: {
    
  }
});