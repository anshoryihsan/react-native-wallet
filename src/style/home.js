import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('screen').height;
// primary='#6379f4';
// secondary="#fafcff";
// dark='#3a3d42';
// gray='#383b40';
// white="#ffffff";
// danger='#ff5b37';
export default StyleSheet.create({
  container: {
    height,
    backgroundColor: '#fafcff',
    paddingHorizontal: 10,
  },
  balance: {
    marginTop: 10,
    height: 130,
    backgroundColor: '#6379f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#eeeeee',
    elevation: 1,
  },
  balanceInfo: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  balanceAmont: {
    color: '#ffffff',
    fontSize: 30,
    paddingBottom: 11,
    paddingTop: 11,
    fontWeight: 'bold',
  },
  operation: {
    marginTop: -5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 20,
    paddingVertical: 20,
    // marginBottom: 5,
  },
  transfer: {
    backgroundColor: '#DADBDD',
    width: 140,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  topUp: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DADBDD',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
  },
});
