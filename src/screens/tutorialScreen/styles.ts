import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_WIDTH} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import {size} from '../../utils/size';

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
    fontWeight: '700',
    color: Colors.Black,
    textAlign: 'center',
  },
  description: {
    fontSize: size.description,
    color: Colors.tutorialDescription,
    fontWeight: '400',
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
    fontWeight: '800',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: SCREEN_WIDTH,
  },
});
