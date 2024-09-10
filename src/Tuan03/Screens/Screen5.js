import React from "react";
import { View, Text, TextInput, Image, Pressable, Linking } from "react-native";

const Screen5 = function() {
    return (
        <View style={{flex: 1, backgroundColor: '#31AA5230'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: '700', lineHeight: 29.3}}>LOGIN</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Email'></TextInput>
                <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput style={{width: 330, height: 54, backgroundColor: '#C4C4C44D', paddingLeft: 35}} placeholder='Password'></TextInput>
                    <Image source={require('../assets/eye.png')} style={{width: 38, height: 36, position: 'absolute', right: 35}}></Image>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Pressable style={{width: 330, height: 45, backgroundColor: '#E53935', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 20, lineHeight: 23.44, fontWeight: '700'}}>LOGIN</Text>
                </Pressable>
                <Text>When you agree to terms and conditions</Text>
                <Text style={{color: '#5D25FA'}}>Forgot your password?</Text>
                <Text>Or login with</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: 110, height: 45, backgroundColor: '#25479B', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>f</Text>
                </View>
                <View style={{width: 110, height: 45, backgroundColor: '#0F8EE0', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>Z</Text>
                </View>
                <View style={{width: 110, height: 45, backgroundColor: '#FFFFFF00', borderColor: '#0680F1', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/gg.png')} style={{width: 35, height: 35}}></Image>
                </View>
            </View>
        </View>
    );
}

export default Screen5;
