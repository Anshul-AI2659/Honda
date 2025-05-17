import {Platform, StyleSheet} from 'react-native'
import colors from '../../utils/colors';
import { normalize, screenHeight, screenWidth, vh, vw } from '../../styles';
// import { ROBOTO_MEDIUM } from '../../styles/fonts';

export default StyleSheet.create({
    header: {
        paddingTop:Platform.OS === 'ios' ? vh(0) : vh(52),
        paddingHorizontal:vh(16),
      },

      mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
      },
      backButton: {
        width:vw(40),
        height:vw(40),
        resizeMode:'contain'
      },
      searchContainer: {
        width:screenWidth-vh(104),
        marginTop:0,
        marginHorizontal:vh(16),
        height:screenHeight/9-vh(45)
      },
      filterImg:{
      width:vh(24),
      height:vh(24)
      },
      dateText:{
        marginTop: vh(6),
        color:colors.lightGreyBlue,
        fontSize:normalize(14),
        fontWeight:'500'
      },
      searchFilter:{
        flexDirection:'row',alignItems:'center',marginTop:vh(15),
        marginBottom:vh(5)
      },
      filter:{
      height:screenHeight/9-vh(47),
      width:screenWidth/7-vh(5),
      borderWidth:1,
      borderColor:colors.primary,
      borderRadius:vh(16),
      justifyContent:'center',
      alignItems:'center'
      },
      retailerCard: {
       
        backgroundColor: colors.white,
        borderRadius: vw(8),
        padding: vw(16),
        marginHorizontal: vw(16),
        marginTop: vh(10),
        borderColor:colors.borderSecond,
        borderWidth:1
      },
      option:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
      retailerName: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: colors.black,
      },
      retailerPhone: {
        fontSize: normalize(14),
        color: '#050507',
        fontWeight:'400',
        marginTop: vh(4),
      },
      statusContainer: {
        marginTop: vh(6),
        borderRadius: vw(6),
        paddingVertical: vh(4),
        paddingHorizontal: vw(10),
        alignSelf: 'flex-start',
      },
      activeStatus: {
        backgroundColor: '#E8F5E9',
      },
      deactiveStatus: {
        backgroundColor: colors.backButtonBackground, 
      },
      statusText: {
        fontSize: normalize(12),
        fontWeight: '600',
        color: colors.greenText,
      },
      statusTextDeactivate:{
        fontSize: normalize(12),
        fontWeight: '600',
        color: colors.black,
      },
      moreIcon: {
        width: vw(20),
        height: vw(20),
        resizeMode: 'contain',
      },
      line:{
       width:screenWidth - vh(32),
       height:vh(1),
       backgroundColor:'#F2F3F3',
       marginTop:vh(24)
      },
      addButton: {
       
        marginVertical: vh(20),
        backgroundColor: colors.primary,
        borderRadius: vw(16),
        width:screenWidth- vh(32),
        height: vh(56),
        
      },
      absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1, 
       
      },
      date:{
       flexDirection:'row',
       marginTop:vh(16),
       justifyContent:'space-between'
      },
      dateImg:{
       width:vh(24),
       height:vh(24)
      },
      checkBox:{
       marginTop:vh(16)
      },
      select:{
       fontSize:normalize(16),
       fontWeight:'500',
       color:colors.inActiveTab
      },
      datebox:{
       width:(screenWidth/2) - vh(24),
       height:vh(56),
       flexDirection:'row',
       justifyContent:'space-between',
       borderWidth:1,
       borderColor:colors.borderSecond,
       borderRadius:vh(16),
       paddingHorizontal:vh(16),
       alignItems:'center'
      },
      tooltipText: {
        fontSize: 16,
        padding: 10,
        color: colors.shadowColor,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      optionButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        position: 'relative', 
        zIndex: 10, 
      },
      head:{
      fontWeight:'500',
      fontSize:normalize(16),
      marginTop:vh(24)
      },
      tooltipContainer: {
       
        backgroundColor: colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
      },
      emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: vh(20),
      },
      emptyText: {
        fontSize: normalize(16),
       
        color: colors.descritptionText,
      },
})