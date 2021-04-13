import { StyleSheet, StatusBar } from 'react-native';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  status: {
    fontSize: 12,
    color: '#ff0000',
  },
  textView: {
    fontSize: 12,
    color: '#000000',
  },
});
export default styles;
