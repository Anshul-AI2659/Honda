import { Platform, StyleSheet } from 'react-native';
import { vw, vh, screenWidth, normalize, FONTS } from '../../styles';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vh(20),
    backgroundColor: colors.white,
    paddingHorizontal: vh(16),
  },
  header: {
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },

  backButton: {
    width: vw(40),
    height: vh(40),
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: vh(20),
  },
  title: {
    fontSize: vh(28),
    fontWeight: '900',
    color: colors.lightBlack,
  },
  logo: {
    width: vh(131),
    height: vh(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: vh(16),
    color: colors.lightGreyBlue,
    marginVertical: vh(8),
    fontWeight: '400',
  },
  changeNumber: {
    fontSize: vh(16),
    color: colors.lightBlack,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  otpInput: {
    width: vw(48),
    height: vh(56),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    textAlign: 'center',
    fontSize: vh(18),
    fontWeight: 'bold',
    borderRadius: vh(16),
    marginHorizontal: vw(9),
    color: colors.shadowColor,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: vh(14),
    textAlign: 'center',
    marginTop: vh(10),
  },
  resendText: {
    fontSize: vh(14),
    color: colors.primary,
    textAlign: 'center',
    marginTop: vh(20),
    fontWeight: 'bold',
  },
  resendEnabled: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: vh(16),
    fontWeight: '600',
    textAlign: 'center',

    color: colors.primary,
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(20),
  },
  timerImg: { width: vh(13), height: vh(13), marginRight: vh(4) },
  resendCode: { color: colors.black, fontSize: vh(16), fontWeight: '600' },
  verifyButton: {
    width: '100%',
    height: vh(50),
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(20),
  },
  bottomView: {
    justifyContent: 'flex-end',
    flex: .88,
  },
  button: {
    backgroundColor: colors.primary,
    height: vh(56),
    borderRadius: vh(15),
    alignItems: 'center',
    width: screenWidth - vh(32),
  },
  disabledButton: {
    backgroundColor: colors.backButtonBackground,
  },
  buttonText: {
    fontSize: normalize(16),
    fontFamily: FONTS.ROBOTO_BOLD

  },
});

export default styles;
