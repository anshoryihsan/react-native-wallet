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
    // flex: 1,
  },
  nav: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  iBack: {height: 24, width: 24, marginRight: 20},
  textFnd: {fontWeight: 'bold', marginRight: 'auto', fontSize: 18},
  searchBar: {
    // marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    // padding: 3,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eeeeee',
    elevation: 1,
  },
  content: {
    paddingVertical: 30,
    marginHorizontal: 10,
  },
  imgList: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover',
  },
});
