import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const style = StyleSheet.create({
        circle: {
            width: 140,
            height: 140,
            borderWidth: 15,
            borderRadius: 70
        },
        pressButton: {
            width: 119,
            height: 48,
            borderWidth: 1,
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

const Screen2 = function() {
    return (
        <View style={{flex: 1, backgroundColor: 'cyan'}}>
            <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={{flex: 1}}>
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={style.circle}></Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 25, lineHeight: 29, fontWeight: '700'}}>GROW{'\n'}YOUR BUSINESS</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 15, lineHeight: 18}}>We will help you to grow your business using{'\n'}online server</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Pressable style={style.pressButton}>
                    <Text style={style.pressText}>LOGIN</Text>
                </Pressable>
                <Pressable style={style.pressButton}>
                    <Text style={style.pressText}>SIGN UP</Text>
                </Pressable>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}><Text style={style.pressText}>HOW WE WORK?</Text></View>
            </LinearGradient>
        </View>
    );
}

export default Screen2;