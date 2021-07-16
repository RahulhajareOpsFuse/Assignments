import React, {Component} from 'react';  
import {StyleSheet, View, Animated} from 'react-native';  
  
export default class App extends Component {  
    state={  
        progressStatus: 0,  
    }  
    anim = new Animated.Value(0);  
    componentDidMount(){  
        this.onAnimate();  
    }  
    onAnimate = () =>{  
        this.anim.addListener(({value})=> {  
            this.setState({progressStatus: parseInt(value,10)});  
        });  
        Animated.timing(this.anim,{  
             toValue: 100,  
             duration: 5000,  
        }).start();  
    }  
  render() {  
    return (  
      <View style={styles.container}>  
            <Animated.View  
                style={[  
                    styles.inner,{width: this.state.progressStatus +"%"},  
                ]}  
            />  
            <Animated.Text style={styles.label}>  
                    {this.state.progressStatus }%  
            </Animated.Text>  
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
    container: {  
    width: "100%",  
    height: 40,  
    padding: 2,  
    borderColor: "green",  
    borderWidth: 3,  
    borderRadius: 100,  
    marginTop: 200,  
    justifyContent: "center",  
  },  
  inner:{  
    width: "100%",  
    height: 30,  
    borderRadius: 20,  
    backgroundColor:"red",
  },  
  label:{  
    fontSize:23,  
    color: "Clack",  
    position: "absolute",  
    zIndex: 1,  
    alignSelf: "center",  
  }  
}); 