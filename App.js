import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Keyboard, FlatList, ScrollView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      bac: null,
      listInput: [],
      x: [],
      x: 'string',
      fx: [],
      fxString: ''
    };
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(this.state !== prevState){
  //     this.setState({
  //       listInput: this.state.listInput
  //     })
  //   }
  // }

  // renderItem = () => {
  //   return (
  //     <View key={i} style={{flexDirection: 'row'}}>
  //           <TextInput 
  //           style={[styles.textInput, {marginHorizontal: 10}]} placeholder={`Enter x${i+1}`}
  //           onChangeText={(x) => {
  //             console.log('x', this.state.x);
  //             this.setState({
  //               x: this.state.x.push(x),
  //             })
  //           }}
  //           />
  //           <TextInput 
  //           style={styles.textInput} placeholder={`Enter f(x${i+1})`}
  //           onChangeText={(fx) => {
  //             this.setState({
  //               fx: [...this.state.fx, fx]
  //             })
  //           }}
  //           />
  //         </View>
  //   )
  // }

  render() {
    console.log('x', this.state.x);
    console.log('fx', this.state.fx);
    // console.log('listinput', this.state.listInput);
    var listInput = [];
    if(this.state.bac!== null){
      for (let i = 0; i < this.state.bac; i++) {
        listInput.push(
          // <View style={{flex: 1}} key={i}>
          //   <ScrollView style={{flex: 1}}>
          <View key={i} style={{flexDirection: 'row'}}>
            <TextInput 
            style={[styles.textInput, {marginHorizontal: 10}]} placeholder={`Enter x${i+1}`}
            onChangeText={(xString) => {
              console.log(`x${i+1}=`,xString);
              this.setState({
                
              })
            }}
            />
            <TextInput 
            style={styles.textInput} placeholder={`Enter f(x${i+1})`}
            onChangeText={(fxString) => {
              console.log(`f(${i+1})=`, fxString);
              this.setState({
                fxString,
              })
            }}
            />
          </View>
          //   </ScrollView>
          // </View>
        )
      }
    }
    return (
      <View style={{alignItems: 'center', flex: 1, width: '100%'}}> 
      <ScrollView>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: 'orange'}}>Phương pháp Newton</Text>
        <TextInput 
        style={styles.textInput} 
        placeholder="Nhập số bậc của đa thức" 
        onChangeText={(text) => {
          this.setState({
            text,
          })
        }}/>
        <TouchableOpacity 
        style={{borderWidth: 1, padding: 10, borderColor: 'gray', borderRadius: 15, margin: 10, paddingHorizontal: 70}}
        onPress={() => {
          this.setState({
            bac: this.state.text,
          });
          Keyboard.dismiss();
        }}>
          <Text>Enter</Text>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center'}}>Bac: {this.state.bac}</Text>
        {/* {this.state.bac ? <View>
          <TextInput style={styles.textInput} placeholder="Enter x1"/>
          <TextInput style={styles.textInput} placeholder="Enter f(x1)"/>
        </View> : null} */}
        {/* <ScrollView> */}
        {
          // this.state.listInput
          listInput
        }
        {/* </ScrollView> */}
        {/* {this.state.bac ? <FlatList
        data={this.state.listInput}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.key}
      /> : null} */}
      <TouchableOpacity onPress={() => {
        this.setState({
          x: [...x,]
        })
      }}>
        <Text>Enter</Text>
      </TouchableOpacity>
      </ScrollView>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1, 
    borderRadius: 15, 
    borderColor: 'gray', 
    padding: 10, 
    marginTop: 15
  }
});