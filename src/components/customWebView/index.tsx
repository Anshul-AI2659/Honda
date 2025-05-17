import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import styles from './style';
import colors from '../../utils/colors';

type CustomWebViewProps = {
    url: string
}

const CustomWebView: React.FC<CustomWebViewProps> = ({ url }) => {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: url }}
                originWhitelist={['*']}
                javaScriptEnabled
                domStorageEnabled
                startInLoadingState
                renderLoading={() => (
                    <View style={styles.centeredContainer}>
                        <ActivityIndicator size="large" color={colors.primary} />
                        <Text style={styles.text1}>Loading...</Text>
                    </View>
                )}
                renderError={(errorName) => (
                    <View style={styles.centeredContainer}>
                        <Text style={styles.text1}>Error: {errorName}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default CustomWebView