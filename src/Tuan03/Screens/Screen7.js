import React from "react";
import { View, Text, TextInput, Image, Pressable, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Screen5 = function() {
    return (
        <View style={{flex: 1, backgroundColor: '#31AA5230'}}>
            <LinearGradient colors={['#FBCB00', '#BF9A00']} style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 60}}>
                    <Text style={{fontSize: 30, fontWeight: '700', lineHeight: 35.16}}>LOGIN</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/acc_2.png')} style={{width: 32, height: 32, position: 'absolute', left: 0}}></Image>
                        <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 45, borderWidth: 1, borderColor: '#F2F2F2'}} placeholder='Name' placeholderTextColor='#000'></TextInput>
                    </View>
                    <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/lock.png')} style={{width: 32, height: 32, position: 'absolute', left: 0}}></Image>
                        <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 45, borderWidth: 1, borderColor: '#F2F2F2'}} placeholder='Password' placeholderTextColor='#000'></TextInput>
                        <Image source={require('../assets/eye.png')} style={{width: 38, height: 36, position: 'absolute', right: 35}}></Image>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Pressable style={{width: 330, height: 45, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 20, lineHeight: 23.44, fontWeight: '700'}}>LOGIN</Text>
                    </Pressable>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>CREATE ACCOUNT</Text>
                </View>
                <View style={{flex: 0.75}}></View>
            </LinearGradient>
        </View>
    );
}

export default Screen5;
