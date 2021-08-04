import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import Speech from 'expo-speech';
//import db from '../config'
//import firebase from 'firebase'
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
            date:''
         
        }
    }



    render(){
        return(
          <ScrollView>
            <View style={styles.container}>
            <View style = {styles.imagemethod}>
              


                <Header 
                    backgroundColor = {'pink'}
                    
                    centerComponent = {{
                        text : "Amogh's Diary",
                        style : { color: 'black', fontSize: 24}

                        
                    }}
                    
                />

                   <Image
                source={require("../me.png")}
                style={styles.my}/>

                </View>
             
                <TextInput 
                    placeholder="Title of today's incident"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Your Name"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />

                         <TextInput
                    placeholder="Date and Time"
                    onChangeText= {(text)=>{
                        this.setState({
                            date: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.date}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                  
                   multiline={true}
                  />
                
                <TouchableOpacity style = {styles.submitButton}>
         
          <Text style = {styles.buttonText}>Save</Text>
        </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: 'lightblue',
  },
  title:{
      height: 40,
      borderWidth: 2,
   
    marginLeft:10,
    marginRight:10,
      color:'',
      padding: 6,
      

  },
  author: {
      height: 40,
      borderWidth: 2,
     marginTop:10,
     marginLeft:10,

     marginRight:10,
       padding: 6,
    
  },
  storyText: {
      height: 130,
      borderWidth: 2,
      margin: 10, 
     padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'black',
      width: 80,
      height: 40,
      borderRadius:10,
      marginBottom:20
    
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
   
  },
  

  my: {   
    width:80,
    height:56,
    alignSelf:"center",
    marginTop:10,
    
  },
  imagemethod:{
  backgroundColor:"lightblue"
  }
});