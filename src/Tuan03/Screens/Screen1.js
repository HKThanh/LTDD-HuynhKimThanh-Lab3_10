import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

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
            borderRadius: 10,
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

const Screen1 = function() {
    return (
        <View style={{flex: 1, backgroundColor: 'cyan'}}>
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
        </View>
    );
}

export default Screen1;