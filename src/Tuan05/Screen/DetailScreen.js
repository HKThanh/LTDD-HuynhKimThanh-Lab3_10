import { View, Image, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        image: {
            width: 301,
            height: 361
        },
        text: {
            alignItems: 'center'
        },
        button: {
            width: 326,
            height: 44,
            alignItems: 'center',
            backgroundColor: '#CA1536',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 1,
        },
        buttonText: {
            color: '#fff',
            fontSize: 20,
            lineHeight: 23.44,
            fontWeight: '700',
        },
        chooseColorButton: {
            width: 332,
            height: 34,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
        }
    }
)

const DetailScreen = ({ route, navigation }) => {

    if (route.params === undefined) {
        imageD = {
            id: 1,
            name: 'Điện Thoại Vsmart Joy 3',
            image: require('../assets/BlueSC.png')
        }
    } else {
        imageD = route.params;
    }
    
    return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff'}}>
            <View style={{flex: 2.5}}>
                <Image source={imageD.image} style={{width: 301, height: 361}} />
                <View style={{flex: 0.2, alignItems: 'flex-start', marginTop: 20}}>
                    <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/star.png')}></Image>
                        <Image source={require('../assets/star.png')}></Image>
                        <Image source={require('../assets/star.png')}></Image>
                        <Image source={require('../assets/star.png')}></Image>
                        <Image source={require('../assets/star.png')}></Image>
                    </View>
                    <Text>(Xem 828 đánh giá)</Text>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, fontWeight: 700}}>1.790.000 đ</Text>
                    <Text style={{fontSize: 15, fontWeight: 700, textDecorationLine: 'line-through'}}>1.790.000 đ</Text>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12, fontWeight: 700, color: '#FA0000'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image source={require('../assets/ask.png')} style={{width: 20, height: 20}}></Image>
                </View>
            </View>
            <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'flex-start'}}>
                <Pressable style={style.chooseColorButton} onPress={() => navigation.navigate('ChooseColor', imageD)}>
                    <Text>4 MÀU-CHỌN MÀU</Text>
                    <Image source={require('../assets/arrow.png')} style={{position: 'absolute', right: 20, width: 11.5, height: 14}}></Image>
                </Pressable>
            </View>
            <View style={{flex: 0.6, alignItems: 'center', justifyContent: 'center'}}>
                <Pressable style={style.button}>
                    <Text style={style.buttonText}>CHỌN MUA</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default DetailScreen
