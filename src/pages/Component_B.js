import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

const Component_B = (props) => {
  const ourCounter = useSelector((myGlobalState) => myGlobalState.counter);

  const ourUserName = useSelector((myGlobalState) => myGlobalState.userName);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Text>Component_B</Text>
      <Text>Counter: {ourCounter}</Text>
      <Text>Name: {ourUserName}</Text>
    </View>
  );
};

export default Component_B;
