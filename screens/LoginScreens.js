import { StyleSheet, Text, View,SafeAreaView,Image, Pressable } from 'react-native'
import React,{useState} from 'react'
import { KeyboardAvoidingView } from 'react-native'
import Sizes, { SIZES } from '../const/Sizes'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreens = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
      <View>
        <Image
    style={{ width: 50/100*(SIZES.width), 
    height: 8/100*(SIZES.height), 
    borderRadius:3/100*(SIZES.width),
    top:10/100*(SIZES.width)}}
    source={require('../assets/images/logo.png')}
/>
      </View>
      <KeyboardAvoidingView>
        <View>
            <Text style={{fontSize:5/100*(SIZES.width),
            fontWeight:'bold',
            top:25/100*(SIZES.width),
            color:'#041E42',
            alignItems:'center',
            left:15/100*(SIZES.width)
            }}>
            Login in to your Account
            </Text>
        </View>

        <View style={{top:35/100*(SIZES.width),
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        backgroundColor:"#D0D0D0",
        paddingVertical:3.5/100*(SIZES.width),
        borderRadius:2.5/100*(SIZES.width),
        marginTop:15/100*(SIZES.width),
        }}>

        <MaterialCommunityIcons 
        style={{left:5/100*(SIZES.width)}} 
        name="email" size={24} color="gray" />

        <TextInput
        value={email}
        onChangeText={(text)=> setEmail(text)}
        style={{color:'gray',
        marginVertical:2/100*(SIZES.width),
        width:80/100*(SIZES.width),left:5/100*(SIZES.width),
        fontSize:email ? 16 : 16}}
        placeholder="enter your email"/>
        </View>

        <View style={{marginTop:-10/100*(SIZES.width)}}>
        <View style={{top:40/100*(SIZES.width),
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        backgroundColor:"#D0D0D0",
        paddingVertical:3.5/100*(SIZES.width),
        borderRadius:2.5/100*(SIZES.width),
        marginTop:15/100*(SIZES.width),
        }}>

        <AntDesign 
        style={{left:5/100*(SIZES.width)}} 
        name="lock1" size={24} color="gray" />

        <TextInput 
        value={password}
        onChangeText={(text)=> setPassword(text)}
        secureTextEntry={true}
        style={{color:'gray',
        marginVertical:2/100*(SIZES.width),
        width:80/100*(SIZES.width),
        left:5/100*(SIZES.width),
        fontSize:email ? 16 : 16}}
        placeholder="enter your password"/>
        </View>
        </View>

        <View style={{marginTop:45/100*(SIZES.width),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'}}>
            <Text style={{color:'#007FFF',
            fontWeight:'700'}}>keep me logged in</Text>
            <Text style={{color:"#007FFF",
            fontWeight:'700'}}>forgot password</Text>
        </View>

        <View style={{marginTop:15/100*(SIZES.width)}}/>

        <Pressable style={{width:300,
        backgroundColor:'#FEBE10',
        borderRadius:2/100*(SIZES.width),
        left:7/100*(SIZES.width),
        marginRight:"auto",
        padding:4/100*(SIZES.width)}}>
            <Text style={{textAlign:'center',
            color:'white',
            fontSize:5/100*(SIZES.width),
            fontWeight:'bold'}}>Login</Text>
        </Pressable>

        <Pressable onPress={()=> navigation.navigate("Register")} style={{marginTop:5/100*(SIZES.width)}}>
            <Text style={{textAlign:'center',
            color:'grey',
            fontSize:4/100*(SIZES.width)}}>
                Don't have an account? Sign Up
            </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreens

const styles = StyleSheet.create({})