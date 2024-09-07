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
        }
    });

const Screen3 = function() {
    return (
        <View style={{flex: 1}}>
            <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={{flex: 1}} locations={[0.4, 0.6, 0.85, 0.95]}>
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/lock.png')} style={{width: 140, height: 140}}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 25, lineHeight: 29, fontWeight: '700'}}>FORGET{'\n'}PASSWORD</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 15, lineHeight: 18}}>Provide your account’s email for which you{'\n'}want to reset your password</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'
                , flexDirection: 'row', justifyContent: 'center'
            }}>
                <Image source={require('../assets/mail48_45.png')} style={{height: 45}}></Image>
                <TextInput style={{width: 305 - 48, height: 45, backgroundColor: '#C4C4C4'}}  placeholder='Email'></TextInput>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Pressable style={style.pressButton}>
                    <Text style={style.pressText}>NEXT</Text>
                </Pressable>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}></View>
            </LinearGradient>
        </View>
    );
}

export default Screen3;