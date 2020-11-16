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
  //content
  // tab: {
  //   height: 70,
  //   padding: 20,
  // },
  profile: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgUser: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  edit: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editTxt: {
    marginLeft: 10,
    fontSize: 16,
    color: '#7A7886',
  },
  name: {
    color: '#4D4B57',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 40,
  },
  listOperation: {
    backgroundColor: '#E5E8ED',
    padding: 27,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  nameOperation: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D4B57',
  },
  BigBtn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  BigBtnActive: {
    width: '90%',
    backgroundColor: '#6379f4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  BigBtnText: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  BigBtnActive: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
