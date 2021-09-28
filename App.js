import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas:[
        {key:1, nome:'Calabresa', valor:39.90},
        {key:2, nome:'Calabresa com Queijo', valor:59.90},
        {key:3, nome:'Brigadeiro', valor:49.90}
      ]
    }
  }
  render(){
    let pizzasItem = this.state.pizzas.map((v,k)=>{
      return  <Picker.Item key={k} label={v.nome} value={k} />
    })
  
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>teste</Text>
        <Picker  selectedValue={this.state.pizza}
            onValueChange={
              (itemValue, itemIndex) => this.setState({pizza: itemValue})
            }
         >
           {pizzasItem}
          
        </Picker>
        <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  logo:{
    textAlign:'center',
    fontSize:28,
    fontWeight:'bold'
  },
  pizzas:{
    marginTop:15,
    fontSize:28,
    textAlign:'center'
  }
});
