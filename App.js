import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Read from './screens/ReadStoryScreen';
import Write from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (

      <View style = {styles.container}>
      
      
        <AppContainer />

             
        




        </View>
      
    );
  }
}




const TabNavigator = createBottomTabNavigator({ Write: {screen: Write}, Read: {screen: Read}, }, {
  
 defaultNavigationOptions: ({navigation})=>({ tabBarIcon: ()=>{ const routeName = navigation.state.routeName; console.log(routeName) 
 

 
  if(routeName === "Write"){ return( <Image source={require("./assets/write.png")} style={{width:40, height:40}} />) }

 else if(routeName === "Read"){ return( <Image source={require("./assets/read.png")} style={{width:40, height:40}} /> ) } 
 
 
 
  } }) } );


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
 
  },
  

});
