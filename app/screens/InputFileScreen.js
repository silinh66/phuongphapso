import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { Navigation } from 'react-native-navigation';
var RNFS = require('react-native-fs');

export default class InputFileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInput: {
        x: [],
        y: []
      },
      bac: 0,
      result: '',
      a: []
    };
  }

  submitValues = async () => {
    for (let i = 0; i < this.state.bac; i++) {
      // console.log('i', i);
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
            // console.log('tich', tich);
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
          if(i!==(this.state.bac-1-count)&&this.state.a[i+1]>0&&i!==0){ 
            result+="+";
          }
        }
        }
        await this.setState({
            result,
        })
        // console.log('result Input Screen', this.state.result);
        await Navigation.setStackRoot(this.props.componentId, {
            component: {
                name: 'ResultScreen',
                options: {
                    topBar: {
                        title: {
                            text: "Result",
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
                },
                passProps: {
                    result: this.state.result
                }
            }
        })
        // console.log('result', result);
      }
    }
  }

  async openDocumentFile(){
     try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
        res.content
      );
      RNFS.readFile(res.uri, 'utf8') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    var data=result.split('\n');
    var filtered = data.filter((el) => {
      return el !== '';
    })
    console.log('filtered', filtered);
    var arrayX = this.state.listInput.x;
    var arrayY = this.state.listInput.y;
    for (let i = 0; i < filtered.length; i++) {
      var item = filtered[i].split(' ');
      arrayX.push(Number.parseInt(item[0], 10));
      arrayY.push(Number.parseInt(item[1], 10));
    }
    // console.log('arrayX, arrayY', arrayX, arrayY);
    this.setState({
      listInput: {
        x: arrayX,
        y: arrayY
      },
      bac: filtered.length
    })
  })
  .catch((err) => {
    console.log(err.message, err.code);
  });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  render() {
    console.log('listInput', this.state.listInput);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} 
        onPress={() => this.openDocumentFile()}>
          <Text style={styles.text}> Choose file </Text>
        </TouchableOpacity>
        {
          this.state.listInput.x.length!==0 ?  <View>
          <Text style={styles.textOutput}>List input:</Text>
          <Text style={styles.textOutput}>x: {this.state.listInput.x.map((item) => {
            return item.toString()+' ';
          })}</Text>
          <Text style={styles.textOutput}>y: {this.state.listInput.y.map((item) => {
            return item.toString()+' ';
          })}</Text>
        </View> : null  
        }
        <TouchableOpacity
                    style={[styles.button, {marginTop: 10, paddingHorizontal: 120}]}
                    onPress={this.submitValues}>
                    <Text style={styles.text}>ENTER</Text>
                  </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 200,
    borderRadius: 10,
    paddingHorizontal: 95,
    paddingVertical: 10,
    backgroundColor: 'orange',
    marginBottom: 10,
  },
  container: {
    alignItems: 'center'
  }, 
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
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
    alignSelf: 'center',
  },
  textOutput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
    alignSelf: 'center',
  }
});