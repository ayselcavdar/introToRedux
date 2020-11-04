import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {RestaurantItem} from '../components';
import {useDispatch} from 'react-redux';

const Restaurants = (props) => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  //   const fetchData = () => {
  //     axios
  //       .post(
  //         'https://rapidapi.p.rapidapi.com/photos',
  //         {
  //           language: 'en_US',
  //           location_id: '15333482',
  //           currency: 'USD',
  //           limit: '15',
  //         },
  //         {
  //           headers: {
  //             'content-type': 'application/json',
  //             'x-rapidapi-key':
  //               '2c792b7475mshecf53c838527d53p1530bfjsnd07d6b423f99',
  //             'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
  //           },
  //         },
  //       )
  //       .then((response) => setList(response.data.result.data))
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => fetchData(), []);

  const fetchData = () => {
    axios
      .get('https://opentable.herokuapp.com/api/restaurants?state=IL')
      .then((response) => setList(response.data.restaurants))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);
  const renderList = ({item}) => {
    return (
      <RestaurantItem
        item={item}
        onAddFavorite={() =>
          dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: {selectedRestaurant: item},
          })
        }
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>
        Restaurants
      </Text>
      <FlatList
        data={list}
        renderItem={renderList}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}}></View>
        )}
      />
    </View>
  );
};
export {Restaurants};
