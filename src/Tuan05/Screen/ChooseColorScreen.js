import {View, Image, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const style = StyleSheet.create({
    block: {
        width: 85,
        height: 80
    }
})

const ChooseColorScreen = ({route, navigation}) => {
    const phones = [
        {
            id: 1,
            name: 'Điện Thoại Vsmart Joy 3',
            image: require('../assets/WhiteSC.png')
        },
        {
            id: 2,
            name: 'Điện Thoại Vsmart Joy 3',
            image: require('../assets/RedSC.png')
        },
        {
            id: 3,
            name: 'Điện Thoại Vsmart Joy 3',
            image: require('../assets/BlackSC.png')
        },
        {
            id: 4,
            name: 'Điện Thoại Vsmart Joy 3',
            image: require('../assets/BlueSC.png')
        }
    ]

    const [imageLink, setImageLink] = React.useState(route.params.image);

    const changeBlueImage = () => {
        setImageLink(phones[0].image);
        phone = phones[0];
    }

    const changeRedImage = () => {
        setImageLink(phones[1].image);
        phone = phones[1];
    }

    const changeBlackImage = () => {
        setImageLink(phones[2].image);
        phone = phones[2];
    }

    const changeWhiteImage = () => {
        setImageLink(phones[3].image);
        phone = phones[3];
    }

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={imageLink} style={{width: 112, height: 132, marginLeft: 4, marginRight: 10}}></Image>
                <View>
                    <Text>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>
                </View>
            </View>
            <View style={{flex: 3, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{alignSelf:'flex-start', marginLeft: 30, marginTop: 10, fontSize: 18}}>Chọn một màu bên dưới:</Text>
                <Pressable style={{width: 85, height: 80, backgroundColor: '#C5F1FB'}} onPress={changeBlueImage}></Pressable>
                <Pressable style={{width: 85, height: 80, backgroundColor: '#F30D0D'}} onPress={changeRedImage}></Pressable>
                <Pressable style={{width: 85, height: 80, backgroundColor: '#000'}} onPress={changeBlackImage}></Pressable>
                <Pressable style={{width: 85, height: 80, backgroundColor: '#234896'}} onPress={changeWhiteImage}></Pressable>
                <Pressable style={{width: 326, height: 44, backgroundColor: '#1952E294', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#CA1536'}} onPress={() => navigation.navigate('Detail', phone)}>
                    <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>XONG</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ChooseColorScreen