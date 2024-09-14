import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';

export default function Tiki() {
    const [value, setValue] = React.useState(1, []);
    const [price, setPrice] = React.useState(141800 * value, []);
    const onPressPlus = () => {
        setValue(value + 1);
        setPrice(price + 141800);
    }
    const onPressMinus = () => {
        if (value > 0) {
            setValue(value - 1);
            setPrice(price - 141800);
        }
    }

    const formatCash = (str) => {
        return Intl.NumberFormat().format(str) + " đ";
    }

    return (
        <View style={{flex: 1, backgroundColor: '#C4C4C4'}}>
            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: 331}}>
                    <Image source={require('../assets/react.jpg')} style={{width: 104, height: 127}}></Image>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontWeight: '700'}}>Learning React Native</Text>
                        <Text style={{fontWeight: '700'}}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={{fontSize: 18, fontWeight: '700', color: '#EE0D0D'}}>141.800 đ</Text>
                        <Text style={{fontSize: 12, textDecorationStyle: 'solid', textDecorationLine: 'line-through'}}>141.800 đ</Text>
                        <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Pressable onTouchStart={onPressMinus} style={{width: 14, height: 16, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12}}>-</Text>
                                </Pressable>
                                <Text style={{fontSize: 14}}>{value}</Text>
                                <Pressable onTouchStart={onPressPlus} style={{width: 14, height: 16, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12}}>+</Text>
                                </Pressable>
                            </View>
                            <Text style={{color: '#134FEC', fontWeight: '700'}}>Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: 331}}>
                    <Text style={{marginRight: 30, fontWeight: '700'}}>Mã giảm giá đã lưu</Text>
                    <Text style={{fontWeight: '700', color: '#134FEC'}}>Xem tại đây</Text>
                </View>
                <View style={{flex: 0.5, width: 331, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', alignItems: 'center'}}>
                    <View>
                        <View style={{width: 32, height: 16, backgroundColor: '#F2DD1B', position: 'absolute', top: 13, left: 10}}></View>
                        <TextInput placeholder='Mã giảm giá' style={{fontSize: 18, fontWeight: '700', width: 208, height: 45, borderWidth: 1, paddingLeft: 50}}></TextInput>
                    </View>
                    <Pressable style={{width: 99, height: 45, backgroundColor: '#0A5EB7', alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                        style={{fontSize: 20, fontWeight: 700, color: '#fff'}}>Áp dụng</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginTop: 15}}>
                <View style={{flex: 0.5, width: 331, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff'}}>
                    <Text style={{fontSize: 12, fontWeight: 700}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Text style={{fontSize: 12, fontWeight: 700, color: '#134FEC'}}>Nhập tại đây?</Text>
                </View>
            </View>
            <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginTop: 15}}>
                <View style={{flex: 0.5, width: 331, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff'}}>
                    <Text style={{fontSize: 18, fontWeight: 700}}>Tạm tính</Text>
                    <Text style={{fontSize: 18, fontWeight: 700, color: '#EE0D0D'}}>{formatCash(price)}</Text>
                </View>
            </View>
            <View style={{flex: 0.3}}></View>
            <View style={{flex: 0.5, alignItems: 'center', backgroundColor: '#fff'}}>
                <View style={{flex: 1, width: 331, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#808080'}}>Thành tiền</Text>
                    <Text style={{color: '#EE0D0D', fontSize: 18, fontWeight: '700'}}>{formatCash(price)}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Pressable style={{backgroundColor: '#E53935', width: 331, height: 45, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: 700}}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
