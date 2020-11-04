import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorites, Restaurants} from './pages';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer, initialState} from './context';

const Tab = createBottomTabNavigator();
const store = createStore(reducer, initialState);

const Router = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Restaurants"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Favorites') {
                iconName = 'gratipay';
              } else if (route.name === 'Restaurants') {
                iconName = 'cloud';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              title: 'Favori Mekanlar',
            }}
          />
          <Tab.Screen
            name="Restaurants"
            component={Restaurants}
            options={{
              title: 'Restoranlar',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Router;
