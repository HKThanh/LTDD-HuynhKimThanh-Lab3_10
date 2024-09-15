import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from "expo-checkbox";

const screen2c = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState('');
    const [isSelected1, setSelection1] = React.useState(true);
    const [isSelected2, setSelection2] = React.useState(false);
    const [isSelected3, setSelection3] = React.useState(true);
    const [isSelected4, setSelection4] = React.useState(false);
    
    const toggleCheckBox1 = () => { setSelection1(!isSelected1); };
    const toggleCheckBox2 = () => { setSelection2(!isSelected2); };
    const toggleCheckBox3 = () => { setSelection3(!isSelected3); };
    const toggleCheckBox4 = () => { setSelection4(!isSelected4); };

    const generatePassword = () => {
        let result = '';
        let characters = '';
        if (isSelected1) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (isSelected2) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (isSelected3) characters += '0123456789';
        if (isSelected4) characters += '!@#$%^&*()_+';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(result);
    }
    const style = StyleSheet.create({
        text: {
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 29.3
        },
        title: {
            color: 'white',
            fontSize: 25,
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: 29.3
        }, 
        line: {
            width: 297, 
            height: 55, 
            flex: 0.055, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center'
        },
        checkBox: {
            width: 20,
            height: 20,
            borderRadius: 5,
            backgroundColor: 'white'
        }
    });

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <LinearGradient
                // Colors and their positions
                colors={['rgba(196, 196, 196, 10)', '#3B3B98', '#3B3B98', 'rgba(196, 196, 196, 10)']}
                locations={[0.001, 0.1, 0.9, 0.999]}
                style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#23235B', width: 322, height: 605, borderRadius: 15}}>
                    <Text style={style.title}>PASSWORD{'\n'}GENERATOR</Text>
                    <TextInput style={{width: 297, height: 55, backgroundColor: '#151537', color:'#fff', marginLeft: 10, fontSize: 20}} value={password}></TextInput>
                    <View style={style.line}>
                        <Text style={style.text}>Password length</Text>
                        <TextInput style={{width: 118, height: 33, backgroundColor: '#fff'}} onChangeText={newLength => setLength(newLength)} value={length}></TextInput>
                    </View>
                    <View style={style.line}>
                        <Text style={style.text}>Include lower case letters</Text>
                        <Checkbox color={isSelected1 ? undefined : '#fff'} value={isSelected1} onValueChange={toggleCheckBox1}></Checkbox>
                    </View>
                    <View style={style.line}>
                        <Text style={style.text}>Include upcase letters</Text>
                        <Checkbox color={isSelected2 ? undefined : '#fff'} value={isSelected2} onValueChange={toggleCheckBox2}></Checkbox>
                    </View>
                    <View style={style.line}>
                        <Text style={style.text}>Include number</Text>
                        <Checkbox color={isSelected3 ? undefined : '#fff'} value={isSelected3} onValueChange={toggleCheckBox3}></Checkbox>
                    </View>
                    <View style={style.line}>
                        <Text style={style.text}>Include special symbol</Text>
                        <Checkbox color={isSelected4 ? undefined : '#fff'} value={isSelected4} onValueChange={toggleCheckBox4}></Checkbox>
                    </View>
                    <Pressable style={{width: 269, height: 55, backgroundColor: '#3B3B98', justifyContent: 'center', alignItems: 'center'}} onTouchStart={generatePassword}>
                        <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>GENERATE PASSWORD </Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )

    
};

export default screen2c;