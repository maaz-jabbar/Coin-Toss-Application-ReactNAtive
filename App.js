import React from 'react';
import { StyleSheet,Button,Image, Text, View , StatusBar} from 'react-native';
import Coin from './coin.gif';


export default class App extends React.Component{
state = {
  result : '',
  tossLoad : false,
  selected : ''
}
generate(){
  this.setState({
    tossLoad : true
  })
  setTimeout(()=>{
    this.setState({
      tossLoad : false
    })
  },2000)
  const a = Math.ceil(Math.random()*2);
  let toss=''
  // alert(a)
  switch(a){
    case 1:
    toss = 'Heads'
    break;
    case 2:
    toss = 'Tails'
    break;
  }
  this.setState({
    result : toss
  })

}

button1(){
  this.setState({
    selected : 'Heads'
  })
}
button2(){
  this.setState({
    selected : 'Tails'
  })
}
reset(){
  this.setState({
    result : '',
  tossLoad : false,
  selected : ''
  })
}
render(){
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style={styles.head}><Text style={styles.headText}>Coin Toss</Text></View>
      {
        (this.state.selected === '')?
          (<View style={styles.selection}><Text style={{fontSize:25}}>Select to Toss!</Text>
          <View style={styles.headtails}>
          <Button style={styles.button} onPress={this.button1.bind(this)} title='Heads'/>
          <Button style={styles.button}  onPress={this.button2.bind(this)} title='Tails'/>
          </View></View>)

          :(<View>{(this.state.tossLoad === true)
            ?( <Image source={Coin}
                style={styles.coin} />)
              :( (this.state.result === '')
                ?<View style={styles.go}><Button style={{justifyContent : 'center'}}onPress={this.generate.bind(this)} title='Go!'/></View>
                  :(this.state.result === this.state.selected)
                    ?(<View><View style={styles.won}><Text style={styles.result}>You Won</Text></View>
                            <Button onPress={this.reset.bind(this)} title='Reset'/>
                      </View>)
                    :(<View><View style={styles.lost}><Text style={styles.result}>You Lost</Text></View>
                            <View style={styles.headtails}><Button onPress={this.generate.bind(this)} title='Retry!'/>
                            <Button onPress={this.reset.bind(this)} title='Reset'/></View></View>))}
            </View>)
        }
    </View>
);}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent : 'center'
  },
  head: {
    // alignSelf: 'stretch',
    position : 'absolute',
    top : 0,
    borderWidth : 1,
    backgroundColor : 'black',
    width : '100%' ,
  },
  headText :{
    alignSelf: 'center',
    color : 'white',
    fontSize : 32,
    fontFamily: 'Roboto',

  },
  coin:{
    width : 150,
    height : 150,
  }
  ,
  lost:{
    width : 150,
    height : 150,
    borderRadius : 150,
    borderColor : 'black',
    borderWidth : 1,
    margin : 10,
    backgroundColor : 'red'
  }
  ,
  won:{
    width : 150,
    height : 150,
    borderRadius : 150,
    borderColor : 'black',
    borderWidth : 1,
    margin : 10,
    backgroundColor : '#ADFF2F'
  }
  ,
  selection:{
    alignSelf : 'center',
    
  },
  button:{
    flexDirection:'row',
    margin : 1
  },
  headtails:{
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  result:{
    alignSelf:'center',
    top :50,
    fontSize : 25,
    fontWeight : 'bold',
  },
  go:{
    width : 150,
    height : 150,
    borderRadius :150,
  }
});
