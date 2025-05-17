import { View, ListRenderItemInfo } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomFlatList from '../../../../components/CustomFlatList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Colors from '../../../../utils/colors'
import CustomCard from '../../../../components/CustomCard'
import { Images } from '../../../../assets'
import CustomHeader from '../../../../components/customHeader'
import CustomStatusBar from '../../../../components/statusBar'

type RootStackParamList = {
    FAQs : undefined;
}

type DataItem = {
    id: number,
    title: string,
    description: string
}

const data: DataItem[] = [
    { id: 1, title: 'What Honda do?', description: 'Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of ' },
    { id: 2, title: 'Do I need any thing special to use?', description: 'Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of ' },
    { id: 3, title: 'Do I need any thing special to use?', description: 'Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websitesTerms of ' }
]

type FaqsScreenProps = NativeStackScreenProps<RootStackParamList>;

const FAQs: React.FC<FaqsScreenProps> = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [expandedItems, setExpandedItems] = useState<number | null>(null);

    const backPress = () => {
        navigation.goBack()
    }
    const toggleExpand = (id: number) => {
        setExpandedItems(prevId => (prevId === id ? null : id)); 
    };

    const renderItem = ({ item}: ListRenderItemInfo<DataItem>) => {
        const isExpanded = expandedItems === item.id;
        return (
            <CustomCard
                title={item.title}
                description={item.description}
                isExpanded={isExpanded} 
                showAccordion={true}
                cardStyle={styles.firstContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={Colors.black}
                iconSize={15}
                onAccordionPress={() => toggleExpand(item.id)}
                titleStyle={styles.text}
                descriptionStyle={styles.description}
            />
        )
    }
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomStatusBar />
            <CustomHeader textHeading='FAQs' onleftPress={backPress} leftIcon={Images.backarrow}  leftButtonStyle={styles.imageWrapper} headerStyle={styles.header} leftIconStyle={styles.imageWrapper}/>
            <CustomFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
            />
        </View>
    )
}

export default FAQs;