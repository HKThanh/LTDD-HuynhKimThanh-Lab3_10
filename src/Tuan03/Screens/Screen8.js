import React from "react";
import { View, Text, TextInput, Image, Pressable} from "react-native";

const Screen8 = function() {
    return (
        <View style={{flex:1, backgroundColor: '#fff'}}>
            <View style={{flex: 0.75, alignItems: "center", justifyContent: 'center'}}>
                <Image source={require('../assets/eyexml.png')} style={{width: 140, height: 140}}></Image>
            </View>
            <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <View>
                    <Image source={require('../assets/acc_8.png')} style={{width: 30, height: 30, position: 'absolute', left: 0}}></Image>
                    <TextInput placeholder="Please input user name" placeholderTextColor={'#C4C4C4'} style={{width: 330, height: 45, borderBottomWidth: 1, paddingLeft: 50, borderBottomColor: '#C4C4C4'}}></TextInput>
                </View>
                <View>
                    <Image source={require('../assets/lock_8.png')} style={{width: 30, height: 30, position: 'absolute', left: 0}}></Image>
                    <TextInput placeholder="Please input user name" placeholderTextColor={'#C4C4C4'} style={{width: 330, height: 45, borderBottomWidth: 1, paddingLeft: 50, borderBottomColor: '#C4C4C4'}}></TextInput>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Pressable style={{width: 330, height: 48, backgroundColor: '#386FFC', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, color: '#fff'}}>LOGIN</Text>
                </Pressable>
                <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: 330}}>
                    <Text style={{fontSize: 15}}>Register</Text>
                    <Text style={{fontSize: 15}}> Forgot Password</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#0E18F5', marginRight: 2}} />
                    <View>
                        <Text style={{textAlign: 'center', fontSize: 18}}>Other Login Methods</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: '#0E18F5', marginLeft: 2}} />
                </View>
                <View style={{flex: 2, width: 330, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{width: 74, height: 74, borderRadius: 10, backgroundColor: '#3AB4FF', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/plus.png')} style={{width: 57, height: 61}}></Image>
                    </View>
                    <View style={{width: 74, height: 74, borderRadius: 10, backgroundColor: '#F4AA47', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/wifi2.png')} style={{width: 56, height: 47}}></Image>
                    </View>
                    <View style={{width: 74, height: 74, borderRadius: 10, backgroundColor: '#3A579C', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/f.png')} style={{width: 32, height: 45, resizeMode: 'stretch'}}></Image>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Screen8;