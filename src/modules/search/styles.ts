import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { normalize, vh, vw } from "../../styles";

const styles = StyleSheet.create({
    header: {
      marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
      paddingVertical: vh(14),
      paddingHorizontal: vw(16),
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.07)',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: .5,
        },
        android: {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)',
        },
      }),
    },
      container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      backButton: {
       width:vw(40),
       height:vw(40),
       resizeMode:'contain'
      },
      imageView:{
        marginTop:vh(10)
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F6FA',
        borderRadius: vw(16),
       
        height:vh(56),
        borderWidth:1,
        borderColor:colors.inactiveDot,
      },
      recentContainer: {
        paddingHorizontal: vh(16),
        marginTop:vh(20)
      },
      cross:{
       width:vh(24),
       height:vh(24)
      },
      recentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:vh(8)
      },
      recentSearch:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:vh(8)
      },
      recentTitle: {
        fontSize: normalize(18),
        fontWeight: '500',
      },
      recentSubtitle:{
        fontSize: normalize(14),
        fontWeight: '400',
        color:colors.lightGreyBlue,
        marginTop:vh(5)
      },
      clearText: {
        fontSize: vh(16),
        fontWeight:'500',
        color: colors.primary,
      },
      recentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      recentIcon: {
        width: vh(40),
        height: vh(40),
        marginRight: vh(12),
        resizeMode:'contain'
      },
      recentText: {
        fontSize: vh(16),
        fontWeight:'700'
      },
      resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: vh(16),
      },
      resultImage: {
        width: vh(40),
        height: vh(40),
        marginRight: vh(12),
        resizeMode:'contain'
      },
      resultTitle: {
        fontSize: normalize(18),
        fontWeight: '500',
      },
      resultSubtitle: {
        fontSize: normalize(14),
        fontWeight: '400',
        color:colors.lightGreyBlue,
        marginTop:vh(5)
    },
      itemImg:{
        width:vh(44),
        height:vh(44),
        borderRadius:vh(8),
        backgroundColor:colors.backButtonBackground,
        marginRight:vh(12)
      }
})


export default styles;