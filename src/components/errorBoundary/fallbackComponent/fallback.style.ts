
import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    color: colors.shadowColor,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.shadowColor,
  },
  error: {
    paddingVertical: 16,
  },
  button: {
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
