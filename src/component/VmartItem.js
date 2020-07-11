import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
const VmartItem = (props) => {
    const { data, onPress } = props;
    console
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <TouchableOpacity activeOpacity={0.5} style={styles.itemBtn} onPress={onPress}>
                    <View style={styles.item}>
                        <View style={styles.img}>
                            <Image style={styles.canteenImage} source={{uri:data.image}} />
                        </View>
                        <View style={styles.info}>
                            <View style={styles.priceRow}>
                              <NumberFormat
                                 value={data.price}
                                 displayType={'text'}
                                 thousandSeparator={true}
                                 suffix={' ₫'}
                                 renderText={formattedValue => <Text style={styles.price}>{formattedValue}</Text>} // <--- Don't forget this!
                               />
                            </View>
                            <Text style={styles.name}>{data.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VmartItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flex: 1,
        padding: 8,
        borderRadius: 15,
    },
    item: {
        flex: 1,
        padding: 14,
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500'
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#000',
        fontWeight: "bold",
        flex: 1,
        marginBottom: 10,
    },
    canteenImage: {
        width: 130,
        height: 130,
    },
    itemBtn: {
        backgroundColor: '#fff',
        borderRadius: 10,
        minHeight: 120,
        overflow: "hidden",
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
})
