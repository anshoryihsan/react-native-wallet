import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('screen').height * 0.75;
// primary='#6379f4';
// secondary="#fafcff";
// dark='#3a3d42';
// gray='#383b40';
// white="#ffffff";
// danger='#ff5b37';
export default StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  brandName: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
    color: '#6379f4',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    height,
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0.8,
    borderColor: '#eeeeee',
    elevation: 1,
  },
  descript: {
    marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  headerSuccess: {
    alignItems: 'center',
    marginVertical: 30,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 45,
  },
  subHeader: {
    fontSize: 16,
    color: '#383b40',
  },
  subHeaderSuccess: {
    color: '#383b40',
    alignItems: 'center',
  },
  form: {
    marginTop: 10,
    fontSize: 16,
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  loginBtnActive: {
    width: '90%',
    backgroundColor: '#6379f4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  loginTextActive: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
  forgot: {
    fontSize: 16,
    color: '#878787',
    alignSelf: 'flex-end',
  },
  signup: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#383b40',
  },
  signup_: {
    color: '#6379f4',
    fontWeight: 'bold',
  },
});
