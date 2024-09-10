import { Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const style = StyleSheet.create({
        circle: {
            width: 140,
            height: 140,
            borderWidth: 15,
            borderRadius: 70
        },
        pressButton: {
            width: 305,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E3C000',
        },
        pressText: {
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 23.44,
        },
        OTP: {
            width: 50,
            height: 50,
            borderWidth: 1,
        }
    });

const Screen4 = function() {
    return (
        <View style={{flex: 1}}>
            <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={{flex: 1}} locations={[0.4, 0.6, 0.85, 0.95]}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 60, fontWeight: '700', lineHeight: 70}}>CODE</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 20, lineHeight: 29, fontWeight: '700'}}>VERIFICATION</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 15, lineHeight: 18, fontWeight: '700'}}>Enter ontime password sent on{'\n'}++849092605798{'\n'}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'
                , flexDirection: 'row', justifyContent: 'center'
            }}>
                <TextInput style={style.OTP}></TextInput>
                <TextInput style={style.OTP}></TextInput>
                <TextInput style={style.OTP}></TextInput>
                <TextInput style={style.OTP}></TextInput>
                <TextInput style={style.OTP}></TextInput>
                <TextInput style={style.OTP}></TextInput>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Pressable style={style.pressButton}>
                    <Text style={style.pressText}>NEXT</Text>
                </Pressable>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}></View>
            </LinearGradient>
        </View>
    );
}

export default Screen4;