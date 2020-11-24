import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {DateTime} from 'luxon';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import style from '../../style/Profile';
import avatar from '../../assets/img/user_.webp';
import {Button} from 'react-native-elements';

// const Item = ({data}, {id}) => {
//   console.log(id, 'ini id');
//   console.log(data, 'sadaksdasdkaskdbkabsdasjdjadnasd');
//   return (
//     <View style={styles.containerTransaction}>
//       <View style={styles.profileContainer}>
//         {/* {data.profile_id === 'out'?null:()} */}
//       </View>
//       <Text>sajska</Text>
//     </View>
//   );
// };

function TransferHistory(props) {
  const {userdata} = useSelector((state) => state.User);
  const Item = ({data}) => {
    console.log(userdata.id, 'ini id');
    console.log(data, 'sadaksdasdkaskdbkabsdasjdjadnasd');
    return (
      <View style={styles.itemList}>
        <View style={styles.user}>
          {data.photo === null ? (
            <Image source={avatar} style={styles.imgList} />
          ) : data.profile_id === userdata.id ? (
            <Image source={avatar} style={styles.imgList} />
          ) : (
            <Image source={avatar} style={styles.imgList} />
            // <Image source={{uri: data.to_photo}} style={styles.profileImg} />
          )}

          <View style={styles.textHelloContainer}>
            <Text style={styles.textNameTransaction}>
              {data.profile_id === userdata.id ? data.to_ : data.from_}
            </Text>
            <Text style={styles.textTransaction}>
              {data.profile_id === userdata.id ? data.trans_name : 'receiver'}
            </Text>
          </View>
        </View>

        {data.profile_id === userdata.id ? (
          <Text style={{color: '#FF5B37', fontSize: 18}}>
            -Rp {data.amount.toLocaleString('id-ID')}
          </Text>
        ) : (
          <Text style={{color: '#1EC15F', fontSize: 18}}>
            +Rp {data.amount.toLocaleString('id-ID')}
          </Text>
        )}
      </View>
    );
  };

  const stateHistory = useSelector((state) => state.Transfer.transferhistory);

  const startDateWeek = DateTime.local().startOf('week').toISODate();
  const endDateWeek = DateTime.local()
    .startOf('week')
    .plus({days: 7})
    .toISODate();

  const getThisMonth = DateTime.local().month;
  const thisWeek = stateHistory.filter((item) => {
    return (
      DateTime.fromISO(item.date).toISODate() >= startDateWeek &&
      DateTime.fromISO(item.date).toISODate() <= endDateWeek
    );
  });

  const thisMonth = stateHistory.filter((item) => {
    return (
      !thisWeek.includes(item) &&
      DateTime.fromISO(item.date).month === getThisMonth
    );
  });

  const beforeAgain = stateHistory.filter((item) => {
    return !thisWeek.includes(item) && !thisMonth.includes(item);
  });

  const historyData = [
    {
      date: 'This Week',
      data: thisWeek,
    },
    {
      date: 'This Month',
      data: thisMonth,
    },
    {
      date: 'Before Again',
      data: beforeAgain,
    },
  ];

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <View style={style.nav}>
        <Icon
          style={style.iBack}
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={style.textFnd}>Notification</Text>
      </View>
      <View style={style.content}>
        {stateHistory.length < 1 ? (
          <Text>Data empty</Text>
        ) : (
          <>
            <SectionList
              sections={historyData}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}, id) => <Item data={item} />}
              renderSectionHeader={({section: {date, data}}) =>
                data.length === 0 ? null : (
                  <View style={styles.section}>
                    <Text style={styles.sectionText}>{date}</Text>
                  </View>
                )
              }
            />
            <View style={styles.buttonFilterContainer}>
              <Button
                icon={<Icon2 name="arrow-up" size={20} color={'#ff5b37'} />}
                titleStyle={{color: '#ff5b37'}}
                buttonStyle={styles.buttonFillter}
                containerStyle={{elevation: 2, flex: 2, marginRight: 20}}
              />
              <Button
                icon={<Icon2 name="arrow-down" size={20} color={'#1EC15F'} />}
                titleStyle={{color: '#1EC15F'}}
                buttonStyle={styles.buttonFillter}
                containerStyle={{elevation: 2, flex: 2, marginRight: 20}}
              />
              <Button
                title="Filter by Date"
                titleStyle={{color: '#6379f4'}}
                buttonStyle={styles.buttonFillter}
                containerStyle={{elevation: 2, flex: 6}}
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  sectionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  buttonFilterContainer: {
    // marginVertical: '6%',
    marginTop: '4%',
    marginBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
  },
  buttonFillter: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 57,
    // width: 57,
  },
  containerTransaction: {
    backgroundColor: '#ffffff',
    // marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4%',
    borderRadius: 10,
    elevation: 3,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textHelloContainer: {
    justifyContent: 'space-between',
    height: 50,
    marginLeft: 20,
  },
  textNameTransaction: {
    fontWeight: '700',
    fontSize: 16,
  },
  textTransaction: {
    color: '#7A7886',
    fontSize: 14,
  },
  textTransactionNumberIncome: {
    color: '#1EC15F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTransactionNumberOutcome: {
    color: '#FF5B37',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransferHistory;
