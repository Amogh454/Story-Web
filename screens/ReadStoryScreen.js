 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style = {styles.head}>Read Story</Text>

                <Text style = {styles.phara}>
                This is my first release...
                When I release more updates this Tab will be enabled to you to store your story in this app forever need not to worry

                
                
                </Text>

                <Text style = {{marginLeft:200,justifyContent:"right", marginTop:10}}>~Amogh P Kaushik</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:"#FFFDD0",

  },
  head:{
    textAlign:"center",
    fontSize:30,
    backgroundColor:"black",
    color:"white",
    fontWeight:"bold"

   
  },
  phara:{
    fontSize:25,
    alignSelf:"center",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
    marginLeft:15,
    marginRight:15,
    marginTop:15,

 
  }
});