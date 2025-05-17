import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import { Images } from '../../assets'

const CustomSocialAccount = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text1}>Social Accounts</Text>
                <Text style={styles.text2}>Follow us on</Text>
            </View>
            <View style={styles.imageContainerView}>
                <Pressable style={styles.imageContainer}>
                    <Image source={Images.faceBookIcon} style={styles.image} resizeMode='contain' />
                </Pressable>
                <Pressable style={styles.imageContainer}>
                    <Image source={Images.instaGramIcon} style={styles.image} resizeMode='contain' />
                </Pressable>
            </View>

        </View>
    )
}

export default CustomSocialAccount