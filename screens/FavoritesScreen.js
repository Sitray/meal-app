import React from 'react';

import { Item, HeaderButtons } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Fav Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        {' '}
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
