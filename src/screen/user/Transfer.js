import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';
import style from '../../style/transfer';
import Icon from 'react-native-vector-icons/AntDesign';

const Transfer = () => {
  const [name, setName] = useState();
  console.log(name);
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <View style={style.nav}>
        <Icon
          style={style.iBack}
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => {
            // dispatch(getContactCreator(auth.data.id));
            // navigation.goBack();
          }}
        />
        <Text style={style.textFnd}>Find Receiver</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={style.searchBar}>
          <Icon name="search1" size={20} color="#A9A9A9" />
          <TextInput
            placeholder="Search receiver here"
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => {
              // dispatch(searchContactCreator(name));
            }}
          />
        </View>
      </View>
      <View style={style.content}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 14}}>Quick Access</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Quick Access</Text>
            <Text>Quick Access</Text>
            <Text>Quick Access</Text>
            <Text>Quick Access</Text>
          </View>
        </View>
        <Text style={{fontSize: 14}}>All Contacts</Text>
      </View>
    </View>
    // <View style={style.container}>
    //   <View style={style.header}>
    //     <View style={style.bar}>
    //       <Icon
    //         name="arrowleft"
    //         size={25}
    //         color="white"
    //         onPress={() => {
    //           // dispatch(getContactCreator(auth.data.id));
    //           navigation.goBack();
    //         }}
    //       />
    //       <Text style={style.tabTitle}>Find Receiver</Text>
    //     </View>
    //   </View>
    // </View>
  );
};

export default Transfer;
