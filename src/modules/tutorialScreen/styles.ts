import {StyleSheet} from 'react-native';
import {vw, vh, screenWidth} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import {size} from '../../utils/size';
import { ROBOTO_BOLD, ROBOTO_EXTRABOLD, ROBOTO_REGULAR } from '../../utils/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  image: {
    width: vw(340),
    height: vw(340),
    marginTop: vh(16),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: vw(35),
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: size.headerTitle,
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    color: Colors.Black,
    textAlign: 'center',
  },
  description: {
    fontSize: size.description,
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.tutorialDescription,
    marginTop: vh(12),
    paddingHorizontal: vw(20),
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(32),
  },
  dot: {
    width: vw(8),
    height: vw(8),
    borderRadius: 5,
    marginHorizontal: vw(3),
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: vw(24),
    height: vw(8),
    resizeMode: 'contain',
    borderRadius: 31,
  },
  inactiveDot: {
    backgroundColor: Colors.tutorialInactiveDot,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(24),
    marginTop: vh(56),
  },
  nextButton: {
    width: vw(174),
    height: vw(52),
    backgroundColor: Colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: Colors.White,
    fontSize: size.button,
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
    textAlign: 'center',
  },
  skipButton: {
    width: vw(93),
    height: vw(20),
    marginLeft:vw(14),
    backgroundColor: Colors.White,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  skipButtonText: {
    color: Colors.primary,
    fontSize: size.button,
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
  },
  getStartedButtonContainer: {
    paddingHorizontal: vw(16),
    marginTop: vh(56),
  },
  getStartedButton: {
    width: '100%',
    height: vw(56),
    backgroundColor: Colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: Colors.White,
    fontSize: size.button,
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: screenWidth,
  },
});
