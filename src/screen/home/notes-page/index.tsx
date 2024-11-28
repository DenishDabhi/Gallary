import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Navbar from '../../../component/go-back-navbar';
import BackIcon from '../../../icon/back-icon';
import AddButton from '../../../component/add-button';

const NotesPage = () => {
  const data = [
    {
      id: 1,
      desc: 'Denish Birth Date :- 22/12/2002 😇😊',
    },
    {
      id: 2,
      desc: 'Banuu Birth Date :- 03/04/2006 😘😍',
    },
    {
      id: 3,
      desc: 'Meet Birth Date :- 04/10/2002 😎😌',
    },
    {
      id: 4,
      desc: 'Mahesh Birth Date :- 04/07/2003 🙂🙃',
    },
    {
      id: 5,
      desc: 'Ajeet Birth Date :- 11/01/2003 😅😂',
    },
    {
      id: 6,
      desc: 'Dharmesh Birth Date :- 11/10/2002 🙂😉',
    },
    {
      id: 7,
      desc: 'Vivek Birth Date :- 12/03/2003 😏😌',
    },
    {
      id: 8,
      desc: 'Divyesh Birth Date :- 15/11/2002 🥰😜',
    },
    {
      id: 9,
      desc: 'Bhavesh Birth Date :- 21/04/2003 😈😎',
    },
    {
      id: 10,
      desc: 'Rakshit Birth Date :- 31/08/2003 😵😇',
    },
  ];
  return (
    <>
      <View style={{flex: 1}}>
        <Navbar icon={<BackIcon />} title="Notes" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 10, gap: 10}}>
            {data?.map(item => (
              <View
                key={item?.id}
                style={{
                  padding: 20,
                  paddingVertical: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  borderRadius: 5,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 1,
                  elevation: 5,
                }}>
                <Text style={{width: '100%', fontSize: 15}}>{item?.desc}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      {/* <AddButton /> */}
    </>
  );
};

export default NotesPage;
