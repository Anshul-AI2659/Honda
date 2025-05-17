import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './style';

interface CustomLogoutProps {
    title?: string;
    description?: string;
    buttonText1?: string;
    buttonText2?: string;
    onButtonPress1?: () => void;
    onButtonPress2?: () => void;
    styleContainer?: StyleProp<ViewStyle>;
    styleContent?: StyleProp<ViewStyle>;
    textStyle1?: StyleProp<TextStyle>;
    textStyle2?: StyleProp<TextStyle>;
    titleStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    styleButtonContainerView?: StyleProp<ViewStyle>;
    styleButtonContainer1?: StyleProp<ViewStyle>;
    styleButtonContainer2?: StyleProp<ViewStyle>;
}

const CustomLogout: React.FC<CustomLogoutProps> = ({
    title,
    description,
    buttonText1,
    buttonText2,
    onButtonPress1,
    onButtonPress2,
    styleContainer,
    textStyle1,
    textStyle2,
    titleStyle,
    descriptionStyle,
    styleButtonContainerView,
    styleButtonContainer1,
    styleButtonContainer2,
    styleContent
}) => {
    return (
        <View style={[styles.container, styleContainer]}>
            <View style={[styles.content, styleContent]}>
                <View>
                    <Text style={[styles.title, titleStyle]}>{title}</Text>
                    <Text style={[styles.description, descriptionStyle]}>{description}</Text>
                </View>
                <View style={[styles.buttonContainerView, styleButtonContainerView]}>
                    <TouchableOpacity onPress={onButtonPress1} style={[styles.buttonContainer, styleButtonContainer1]}>
                        <Text style={[styles.text, textStyle1]}>{buttonText1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onButtonPress2} style={[styles.buttonContainer, styleButtonContainer2]}>
                        <Text style={[styles.text, textStyle2]}>{buttonText2}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CustomLogout;