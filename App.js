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
      a: [],
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
    });
    for (let i = 0; i < this.state.bac; i++) {
      console.log('i', i);
      var tu=this.state.listInput.y[i];
      var mau=1;
      var tong=0;
      var key="a"+i.toString();
      if(i===0 && this.state.a.length !==0){
        this.state[key]=this.state.listInput.y[0];
        var arrayA = this.state.a;
        arrayA.push(this.state[key]);
        this.setState({
          a: arrayA,
        })
        // mau=1;
        // this.setState({
        //   a: [...this.state.a, this.state.listInput.y[0]]
        // })
      } else {
        for (let j = 0; j < i; j++) {
          mau*=(this.state.listInput.x[i]-this.state.listInput.x[j]);
          if(j===0){
            tong+=this.state.a[0];
            // console.log('a[0]', this.state.a[0]);
            // console.log('tong', tong);

          } else {
            var tich=1;
            for (let k = 0; k < j; k++) {
              tich*=(this.state.listInput.x[i]-this.state.listInput.x[k]);
            }
            console.log('tich', tich);
            tong+=tich*this.state.a[j];
            // console.log('tong', tong);
          }
        }
        // console.log('mau', mau);
        tu-=tong;
      }
      // console.log('tu, mau', tu, mau);

      if(mau!==0){
        arrayA = this.state.a;
        arrayA.push(tu/mau);
        this.setState({
          a: arrayA
        })
      }
      // console.log('a.length', this.state.a.length);
      // console.log('bac', this.state.bac);
      // console.log('is a.length == bac?', this.state.a.length === this.state.bac);

      if(this.state.a.length===this.state.bac){

        var result = '';
        for (let i = 0; i < this.state.bac; i++) {
          if(this.state.a[i]!==0){
          if(i===0){
            result+=this.state.a[i].toString();
            result+="+"
            
          } else {
            if(this.state.a[i]!==1){
              result+=this.state.a[i].toString();
            }
            for (let j = 0; j < i; j++) {
              result+=`(x-${this.state.listInput.x[j]})`          
            
            }       
          }
          var count=0;
          for (let k = i; k < this.state.bac; k++) {
            if(this.state.a[k]===0){
              count++;
            }      
          }
          if(i!==(this.state.bac-1-count)&&this.state.a[i+1]>0){ 
            result+="+";
          }
        }
        }
        console.log('result', result);
      }
    }
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
    // console.log('listInput.x = ', this.state.listInput.x);
    // console.log('listInput.y = ', this.state.listInput.y);
    // console.log('state.a = ', this.state.a);
    console.log('a', this.state.a);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TextInput 
        style={styles.bacInput}
        placeholder="Nhập số điểm input"
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
            bac: Number.parseInt(this.state.bacString, 10),
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