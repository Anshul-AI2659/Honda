import {Image, ImageSourcePropType, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';

// Custom Components
import CustomStatusBar from '../../components/statusBar';
import Carousel from '../../components/customCorousel';
import CustomButton from '../../components/customButton';
import CustomHeader from '../../components/customHeader';
import {SingleExpandableList} from '../../components/customAccordian';

// Assets
import {steps} from '../../assets/data';
import {Icons} from '../../assets';

//Utils
import {string} from '../../utils/strings';
import {StackParamList} from '../../utils/types';

//styles
import styles from './styles';

// Types
interface ProductDetailPageProps {
  navigation: StackNavigationProp<StackParamList>;
}
interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

// Main Component
const ProductDetailPage = ({navigation}: ProductDetailPageProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Function to expand the clicked item and collapse others
  const handleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // Function to handle Scrolling of Corousel
  const handleScrollEnd = (event: {
    nativeEvent: {contentOffset: {x: number}};
  }) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / styles.slide.width,
    );
    setCurrentStep(newIndex);
  };

  // Corousel Render Item
  const corouselRenderItem = ({item}: {item: Item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  // Navigating back on Back Press
  const onBackPress = () => {
    navigation.goBack();
  };

  // Function to Toggle the expanded state of Description
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        leftIcon={Icons.back}
        onleftPress={onBackPress}
        leftButtonStyle={styles.backButton}
        headerStyle={styles.header}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          data={steps}
          currentStep={currentStep}
          renderItem={corouselRenderItem}
          handleScrollEnd={handleScrollEnd}
          paginationStyle={styles.pagination}
        />
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.productDetailContainer}>
              <View>
                <Text style={styles.productName}>{'EU70is'}</Text>
              </View>
              <Text style={styles.productDetail}>
                {'Generators | Inverter Series'}
              </Text>
            </View>
            <View>
              <Text style={styles.productDescription}>
                {expanded
                  ? string.ProductDetailPage.moreDescription
                  : string.ProductDetailPage.lessDescription}
                <Text style={styles.readMore} onPress={toggleDescription}>
                  {expanded ? ' Read less' : 'Read more'}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.allExpandableContainer}>
            <SingleExpandableList
              icon={Icons.down}
              title={'Specifications'}
              containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 0}
              onPress={() => handleExpand(0)}
            />
            <SingleExpandableList
              icon={Icons.down}
              title={'Technology'}
              containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 1}
              onPress={() => handleExpand(1)}
            />
            <SingleExpandableList
              icon={Icons.down}
              title={'Salient Features'}
              containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 2}
              onPress={() => handleExpand(2)}
            />
            <SingleExpandableList
              icon={Icons.down}
              title={'Extended Warranty of Features'}
              containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 3}
              onPress={() => handleExpand(3)}
            />
            <SingleExpandableList
              icon={Icons.down}
              title={'Download Content'}
              containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 4}
              onPress={() => handleExpand(4)}
            />
            <SingleExpandableList
              icon={Icons.down}
              title={'Popular Applications'}
              containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 5}
              onPress={() => handleExpand(5)}
            />
            <View style={styles.dealerContainer}>
              <Text style={styles.dealer}>{'Dealers'}</Text>
              <Text style={styles.locateDealer}>{'Locate Dealer'}</Text>
            </View>
            <View style={styles.alertBanner}>
              <View style={styles.alertHeader}>
                <Image source={Icons.info} style={styles.infoImg} />
                <Text style={styles.alertTitle}>{'Disclaimer'}</Text>
              </View>
              <View style={styles.alertDescriptionContainer}>
                <Text style={styles.alertDescription}>
                  {string.ProductDetailPage.alertDescription}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerContentContainer}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.priceText}>{'₹ 245,000.00'}</Text>
            <Text style={styles.priceDetailText}>
              {'Inclusive of all taxes'}
            </Text>
          </View>
          <CustomButton
            buttonText={'BUY NOW'}
            onPress={() => {}}
            buttonStyle={styles.buyNowButton}
            textStyle={styles.buyNowButtonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailPage;
