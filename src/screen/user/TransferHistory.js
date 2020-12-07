import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {DateTime} from 'luxon';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import style from '../../style/Profile';
import avatar from '../../assets/img/user_.webp';
import {Button} from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import {FilterHistory} from '../../redux/actions/Transfer';

function TransferHistory(props) {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const {userdata} = useSelector((state) => state.User);
  const {token} = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  console.log(filter);

  const minDate = DateTime.local(2020, 3, 3).toISODate();
  const maxDate = DateTime.local();

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  const dtmin = new Date(startDate);
  const nMinDate = new Date(dtmin).toDateString('');
  const dtmax = new Date(endDate);
  const nMaxDate = new Date(dtmax).toDateString('');

  useEffect(() => {
    dispatch(FilterHistory(token, startDate, endDate, filter));
  }, [dispatch, token, startDate, endDate, filter]);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
      // setSelectedStartDate(null);
    } else {
      setSelectedStartDate(date);
      // setSelectedEndDate(null);
    }
  };

  // const Item = ({data}) => {
  //   return (
  //     <View style={styles.itemList}>
  //       <View style={styles.user}>
  //         {data.photo === null ? (
  //           <Image source={avatar} style={styles.imgList} />
  //         ) : data.profile_id === userdata.id ? (
  //           <Image source={avatar} style={styles.imgList} />
  //         ) : (
  //           <Image source={avatar} style={styles.imgList} />
  //           // <Image source={{uri: data.to_photo}} style={styles.profileImg} />
  //         )}

  //         <View style={styles.textHelloContainer}>
  //           <Text style={styles.textNameTransaction}>
  //             {data.profile_id === userdata.id ? data.to_ : data.from_}
  //           </Text>
  //           <Text style={styles.textTransaction}>
  //             {data.profile_id === userdata.id ? data.trans_name : 'receiver'}
  //           </Text>
  //         </View>
  //       </View>

  //       {data.profile_id === userdata.id ? (
  //         <Text style={{color: '#FF5B37', fontSize: 18}}>
  //           -Rp {data.amount.toLocaleString('id-ID')}
  //         </Text>
  //       ) : (
  //         <Text style={{color: '#1EC15F', fontSize: 18}}>
  //           +Rp {data.amount.toLocaleString('id-ID')}
  //         </Text>
  //       )}
  //     </View>
  //   );
  // };
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemList}>
        <View style={styles.user}>
          {item.photo === null ? (
            <Image source={avatar} style={styles.imgList} />
          ) : item.profile_id === userdata.id ? (
            <Image source={avatar} style={styles.imgList} />
          ) : (
            <Image source={avatar} style={styles.imgList} />
            // <Image source={{uri: data.to_photo}} style={styles.profileImg} />
          )}

          <View style={styles.textHelloContainer}>
            <Text style={styles.textNameTransaction}>
              {item.profile_id === userdata.id ? item.to_ : item.from_}
            </Text>
            <Text style={styles.textTransaction}>
              {item.profile_id === userdata.id ? item.trans_name : 'receiver'}
            </Text>
          </View>
        </View>

        {item.profile_id === userdata.id ? (
          <Text style={{color: '#FF5B37', fontSize: 18}}>
            -Rp {item.amount.toLocaleString('id-ID')}
          </Text>
        ) : (
          <Text style={{color: '#1EC15F', fontSize: 18}}>
            +Rp {item.amount.toLocaleString('id-ID')}
          </Text>
        )}
      </View>
    );
  };

  const stateHistory = useSelector((state) => state.Transfer.transferhistory);
  const {historyfilter} = useSelector((state) => state.Transfer);
  const {loading} = useSelector((state) => state.Transfer);

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
        <Text style={style.textFnd}>Transaction History</Text>
      </View>

      <View style={style.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#6379f4" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={true}
            data={historyfilter}
            // style={styletrans.flatList}
            keyExtractor={(item, index) => index}
            renderItem={renderItem}
            // onEndReached={loadMore}
            // onEndReachedThreshold={0.5}
            // initialNumToRender={4}
          />
        )}
        {/* <SectionList
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
              /> */}

        <View style={styles.buttonFilterContainer}>
          <Button
            icon={<Icon2 name="arrow-up" size={20} color={'#ff5b37'} />}
            titleStyle={{color: '#ff5b37'}}
            buttonStyle={styles.buttonFillter}
            containerStyle={{elevation: 2, flex: 2, marginRight: 20}}
            onPress={() => setFilter(filter === 'outcome' ? '' : 'outcome')}
            on
          />
          <Button
            icon={<Icon2 name="arrow-down" size={20} color={'#1EC15F'} />}
            titleStyle={{color: '#1EC15F'}}
            buttonStyle={styles.buttonFillter}
            containerStyle={{elevation: 2, flex: 2, marginRight: 20}}
            onPress={() => setFilter(filter === 'income' ? '' : 'income')}
          />
          <Button
            title="Filter by Date"
            titleStyle={{color: '#6379f4'}}
            buttonStyle={styles.buttonFillter}
            containerStyle={{elevation: 2, flex: 6}}
            onPress={() => setModal(true)}
          />
        </View>
      </View>

      <Overlay isVisible={modal} overlayStyle={{width: '100%', margin: 0}}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          selectedDayColor="#6379f4"
          onDateChange={onDateChange}
        />
        <View
          style={{
            marginTop: '4%',
            marginBottom: '4%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '4%',
          }}>
          <View>
            <Text>from</Text>
            <Text
              style={{fontWeight: 'bold', marginRight: 'auto', fontSize: 15}}>
              {nMinDate}
            </Text>
          </View>
          <View>
            <Text>to</Text>
            <Text
              style={{fontWeight: 'bold', marginRight: 'auto', fontSize: 15}}>
              {nMaxDate}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModal(false)}
          style={{
            width: '50%',
            backgroundColor: '#6379f4',
            padding: 15,
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 25,
            borderRadius: 12,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: 15,
            }}>
            Apply
          </Text>
        </TouchableOpacity>
      </Overlay>
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
