import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    marginBottom: 15,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // elevation: 2,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  user: {
    flexDirection: 'row',
    height: 56,
  },
  imgList: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover',
  },
  userName: {
    justifyContent: 'space-between',
  },
});
