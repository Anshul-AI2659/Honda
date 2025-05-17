import { Platform, StyleSheet } from 'react-native';
// Styles
import { FONTS, normalize, screenWidth, vh, vw } from '../../../styles';
// Utils
import colors from '../../../utils/colors';

export default StyleSheet.create({
  bottomView: {
    justifyContent: 'flex-end',
    flex: 0.9,
  },
  margin: {
    marginTop: vh(30),
  },
  container: {
    flex: 1,
    paddingTop: vh(40),
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: vh(16),
  },
  HeadingContainer: {
    marginTop: vh(20),
  },
  logo: {
    width: vh(131),
    height: vh(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backButton: {
    width: vh(40),
    height: vh(40),
    resizeMode: 'contain',
  },
  title: {
    fontSize: vh(26),
    fontFamily:FONTS?.ROBOTO_BLACK
  },
  subtitle: {
    fontSize: vh(16),
    color: '#666',
    marginTop: vh(10),
    marginBottom: vh(20),
    fontWeight: '400',
  },
  header: {
    flexDirection: 'row',
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  partition: {
    color: colors.primary,
    marginRight: vw(10),
    fontSize: vw(20),
  },
  input: {
    flex: 1,
    fontSize: normalize(16),
    paddingVertical: vh(10),
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: colors.primary,
    fontSize: normalize(12),
    fontFamily:FONTS.ROBOTO_MEDIUM,
    marginTop:vh(10),
    marginLeft:vw(5)
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: vh(15),
    alignItems: 'center',
    width: screenWidth - vh(32),
    height:vh(56)
  },
  disabledButton: {
    backgroundColor: colors.backButtonBackground,
  },
  buttonText: {
    fontSize: normalize(16),
    fontFamily: FONTS?.ROBOTO_BOLD,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: vh(24),
  },
  link: {
    color: colors.black,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: colors.black,
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  separator: {
    width: vw(1),
    height: '60%',
    backgroundColor: colors.borderSecond,
    marginLeft: vw(10)
},
inputContainer: {
  flexDirection: 'row',
  borderWidth: vw(1),
  borderColor: 'red',
  borderRadius: vw(16),
  height:vw(56),
  paddingHorizontal: vw(10),
  alignItems: 'center',
  marginTop: vh(5),
},
inputContainerInside: {
  borderColor: colors.white, paddingHorizontal: vw(12), paddingVertical: Platform.OS === 'android' ? vh(3) : vh(13) 
},
});
