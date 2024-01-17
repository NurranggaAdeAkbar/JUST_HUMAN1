import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const WARNA_DISABLE = '#929CAD'
const WARNA_UTAMA = '#1648CE'

const CustomButton = ({onPress, text, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
      <Text style = {styles.text(type)} >{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container : (type) => ({
        backgroundColor : type === "TERTIARY" ? '#F9FBFC' : WARNA_UTAMA,
        // width : '100%',
        padding : 15,
        paddingHorizontal : 15,
        marginHorizontal : 20,
        marginVertical : 10,
        borderRadius : 10,
        alignItems : 'center',
        borderColor : type === "TERTIARY" ? '#F9FBFC' : WARNA_DISABLE,
        borderWidth : 0.1,
        shadowColor:  "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }),
    text : (type) => ({
        fontWeight : 'bold',
        color : type === "TERTIARY" ? WARNA_DISABLE : 'white'
    })
})