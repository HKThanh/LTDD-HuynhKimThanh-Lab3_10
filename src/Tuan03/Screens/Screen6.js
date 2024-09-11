import React from "react";
import { View, Text, TextInput, Image, Pressable, Input, TouchableOpacity } from "react-native";

const Screen6 = function() {
    return (
        <View style={{flex: 1, backgroundColor: '#31AA5230'}}>
            <View style={{flex: 0.5}}></View>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: '700', lineHeight: 29.3}}>REGISTER</Text>
            </View>
            <View style={{flex: 2, justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Name'></TextInput>
                <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Phone'></TextInput>
                <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Email'></TextInput>
                <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Password'></TextInput>
                    <Image source={require('../assets/eye.png')} style={{width: 38, height: 36, position: 'absolute', right: 35}}></Image>
                </View>
                <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Birthday'></TextInput>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: 330}}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 20}}>
                        <View style={{width: 23, height: 23, borderWidth: 2, borderRadius: 23 / 2}}>
                        </View>
                        <Text style={{fontSize: 18, color: '#000', paddingLeft: 10}}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 20}}>
                        <View style={{width: 23, height: 23, borderWidth: 2, borderRadius: 23 / 2}}>
                        </View>
                        <Text style={{fontSize: 18, color: '#000', paddingLeft: 10}}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 0.7, justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Pressable style={{width: 330, height: 45, backgroundColor: '#E53935', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 20, lineHeight: 23.44, fontWeight: '700'}}>REGISTER</Text>
                </Pressable>
                <Text>When you agree to terms and conditions</Text>
            </View>
            <View style={{flex: 0.5}}></View>
        </View>
    );
}

export default Screen6;
